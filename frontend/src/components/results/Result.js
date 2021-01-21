import React from "react";
import {connect} from 'react-redux';

function Result({results}) {
    return <div className="bg-white m-5 p-5">
        <h4>Results:</h4>
        <div className="row">
            <div className="offset-2 col-8">
                {results.map((result,i) => <div key={i} className="list-group">
                    <button type="button" className={"list-group-item list-group-item-action m-1" + (result.palindrome?" bg-warning":"") }>
                        {result.text}
                    </button>
                </div>)}
            </div>
        </div>
    </div>
}

const mapStateToProps = ({textResults}) => {
    return {results: textResults}
};

export default connect(mapStateToProps, null)(Result);
