'use strict';


class About extends React.Component {
    render() {
        return (
            <div>
                <div className="modal d-block">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark">About</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={this.props.hideAbout}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">Author: Maksym Sichkaruk</p>
                                <p className="text-dark">Email: work.maksych@gmail.com</p>
                                <p className="text-dark">Tel: +380(68)161-25-40</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" onClick={this.props.hideAbout}>
                </div>
            </div>
        );
    }
}