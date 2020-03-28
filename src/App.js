import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import './MainStyle.scss';
import UserHome from "./views/user_home/UserHome";
import ErrorPage from "./components/error_page/ErrorPage";


class App extends Component {
  render() {
    return (
        <div>
          <div className="main-style__error-page">
            <ErrorPage />
          </div>

        <div className="main-style__application-body">
      <Router>
        <div>
          <Route path="/" exact component={UserHome} />
        </div>
      </Router>
        </div>
        </div>
    );
  }
}

export default App;
