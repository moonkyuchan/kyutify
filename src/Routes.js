import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import Home from "./Page/Home/Home";
import Library from "./Page/Library/Library";
import Search from "./Page/Search/Search";
// import Footer from "./Footer/Footer";

const Routes = () => {
  return (
    <Router>
      <RouteBlock>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </RouteBlock>
      {/* <Footer /> */}
    </Router>
  );
};

const RouteBlock = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #424242, 10%, #212121);
  color: white;
`;

export default Routes;
