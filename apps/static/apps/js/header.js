'use strict';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAboutShow: false,
            isDropdownShow: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.hideAbout = this.hideAbout.bind(this);
    }

    toggleDropdown(e=null) {
        if (e)
            e.preventDefault();
        this.setState({isDropdownShow: !this.state.isDropdownShow});
    }

    showAbout(e) {
        e.preventDefault();
        this.toggleDropdown();
        this.setState({isAboutShow: true});
    }

    hideAbout() {
        this.setState({isAboutShow: false});
    }

    render() {
        return (
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="masthead-brand">HTML Tag Counter</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle"
                               href="#"
                               onClick={this.toggleDropdown}>Menu</a>
                            <div className={this.state.isDropdownShow ? "dropdown-menu show" : "dropdown-menu"}
                                 aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#" onClick={this.showAbout}>About</a>
                            </div>
                        </div>
                    </nav>
                </div>
                {this.state.isAboutShow ? <About hideAbout={this.hideAbout}/> : null}
            </header>
        );
    }
}