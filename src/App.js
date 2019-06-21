import React, { Component } from 'react';
// import './App.scss';
// import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from "./client/router/router";
// import { createStore } from "redux";
// export const store = createStore();

class App extends Component {
  render() {
    return (
      <>
        {/* <Provider store={store}> */}
          <BrowserRouter basename="/">
            <RenderRoutes/>
          </BrowserRouter>
        {/* </Provider> */}
      </>
    );
  }
}

export default App;
