import {createStore, applyMiddleware, compose} from "redux"
// import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "../reducer/index"


const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;


// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))