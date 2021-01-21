import React, {Fragment} from "react";

import {render} from "react-dom";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Navbar from "./components/navbar/Navbar";
import Result from "./components/results/Result";
import {configureStore} from "./store";
import {getText} from "./sagas/IEcho";


function App() {
    return <Fragment>
        <Navbar/>
        <main className="container">
            <div className="container-fluid">
                <Result/>
            </div>
        </main>
    </Fragment>
}

const sagaMiddleware = createSagaMiddleware();
const store = configureStore([sagaMiddleware]);
sagaMiddleware.run(getText);
render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
