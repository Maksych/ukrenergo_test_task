'use strict';


class PageTagsParser extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Page url';
        this.state = {
            url: '',
            success: false,
            data: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.props.hidePreloader();
    }

    handleChange(e) {
        this.setState({url: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({success: false, data: null});
        if (isUrlValid(this.state.url)) {
            this.props.showPreloader();
            fetch(tagsUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url: this.state.url})
            })
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    this.props.hidePreloader();
                    this.setState({
                        success: true,
                        data: JSON.parse(response.data)
                    });
                })
                .catch(error => {
                    this.props.hidePreloader();
                });
        }
    }

    render() {
        return (
            <div>
                <form className={"text-center pb-5"}
                      onSubmit={this.handleSubmit}>
                    <div className={"form-group text-center"}>
                        <label htmlFor="url">{this.title}</label>
                        <input type="text"
                               id={"url"}
                               name={"url"}
                               className={"form-control"}
                               value={this.state.url}
                               onChange={this.handleChange}/>
                    </div>
                    <button type={"submit"}
                            className={"btn btn-primary"}>Submit
                    </button>
                </form>
                {this.state.success ? <PageTagsStats state={this.state}/> : null}
            </div>
        );
    }
}