import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";

import { BrowserRouter } from "react-router-dom";
import ContextWrapperProvider from "./context/ContextWrapper";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextWrapperProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ContextWrapperProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
