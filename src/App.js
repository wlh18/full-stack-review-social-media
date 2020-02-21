import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./Components/Headers/Header";
import AuthHeader from "./Components/Headers/AuthHeader";
import routes from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App(props) {
  return (
    <div className="App">
      <ToastContainer
        removeCloseButton={true}
        autoClose={3000}
        hideProgressBar={true}
      />
      {props.location.pathname === "/" ||
      props.location.pathname === "/register" ? (
        <>
          <AuthHeader />
          {routes}
        </>
      ) : (
        <>
          <Header />
          {routes}
        </>
      )}
    </div>
  );
}

export default withRouter(App);
