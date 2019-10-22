'use strict';


class TagsParser extends React.Component {
    title = "URL";

    render() {
        return (
            <form action="" className={"text-center"}>
                <div className={"form-group text-center"}>
                    <label htmlFor="url">{this.title}</label>
                    <input type="text" id={"url"} name={"url"} className={"form-control"}/>
                </div>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </form>
        );
    }
}


ReactDOM.render(
    <TagsParser/>,
    document.querySelector('#tag-parser')
);