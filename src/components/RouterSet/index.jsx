import React from 'react';
import Students from "../Students";
import Todo from "../Todo";
import Table from "../Table";
import Sider from "../Sider";
import Filelist from "../Filelist";
import { Router, Route, hashHistory,IndexRedirect } from 'react-router';






var RouterSet = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Sider}>
          <IndexRedirect to="/clound/"/>
          <Route path="/clound/*" component={Filelist} />
          <Route path="/students" component={Students} />
          <Route path="/todo" component={Todo} />
          <Route path="/table" component={Table} />
        </Route>

      </Router>
    )
  }
});
module.exports = RouterSet;