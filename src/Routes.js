import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import Home from "./Page/Home/Home";
import Library from "./Page/Library/Library";
import Search from "./Page/Search/Search";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <RouteBlock>
          <Nav />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/library" component={Library} />
          </Switch>
        </RouteBlock>
      </Router>
    );
  }
}

const RouteBlock = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #424242, #1b1b1b);
  color: white;
`;

export default Routes;
