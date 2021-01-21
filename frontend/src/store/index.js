import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';


export const configureStore = function (middlewares) {

    const enhancer = compose(applyMiddleware(...middlewares));
    const store = createStore(
        reducers,
        enhancer
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};
