import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./styles/Global";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./store/reducer";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
