'use strict';


function isUrlValid(url) {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return res != null;
}


class TagsParser extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Page url';
        this.state = {
            url: '',
            csrftoken: document.querySelector("[name=csrfmiddlewaretoken]").value
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({url: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (isUrlValid(this.state.url)) {
            console.log(this.state);
            fetch(tagsUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }).then(response => {
                console.log(response.json().then(response => {
                    console.log(response);
                }));
            });
        }
    }

    render() {
        return (
            <form action=""
                  className={"text-center"}
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
        );
    }
}


ReactDOM.render(
    <TagsParser/>,
    document.querySelector('#tag-parser')
);