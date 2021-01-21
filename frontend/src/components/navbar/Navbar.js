import React, {Fragment} from "react";
import {getTextRevert} from "../../actions/TextRevert";
import {connect} from 'react-redux';


export class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);
    }

    handleClick(){
        if(this.state.text.trim() === ''){
            return
        }
        this.props.submitText(this.state.text)
    }

    render() {
        return <Fragment>
            <nav className="navbar navbar-expand-md navbar-danger bg-danger fixed-top">
                <div className="container-fluid align-content-center offset-3 col-6">
                    <div className="d-flex w-100">
                        <input className="form-control w-100 me-4"
                               type="text"
                               name="text"
                               id="text"
                               placeholder="Insert text"
                               aria-label="text"
                               value={this.state.text}
                               onChange={this.handleChange}
                        />
                        <button className="btn btn-primary w-25"
                                type="button"
                                onClick={this.handleClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </nav>
        </Fragment>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitText: (text) => {
            dispatch(getTextRevert(text))
        },
    }
};

export default connect(null, mapDispatchToProps)(Navbar);
