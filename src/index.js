import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App"
import postsReducer from "./reducer";
import thunk from "redux-thunk"
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    ,
    document.getElementById('root')
)