'use strict';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
        this.showPreloader = this.showPreloader.bind(this);
        this.hidePreloader = this.hidePreloader.bind(this);
    }

    showPreloader() {
        this.setState({loading: true});
    }

    hidePreloader() {
        this.setState({loading: false});
    }

    render() {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header/>
                <main role="main" className="inner cover">
                    {this.state.loading ? <Preloader/> : null}
                    <PageTagsParser
                        showPreloader={this.showPreloader}
                        hidePreloader={this.hidePreloader}/>
                </main>
                <Footer/>
            </div>
        );
    }
}