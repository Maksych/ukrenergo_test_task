'use strict';


class Preloader extends React.Component {
    render() {
        return (
            <div className={'preloader'}>
                <div className={"spinner-border text-primary"} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}