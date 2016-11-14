import React from 'react';
import Students from "../Students";
import Todo from "../Todo";
import Table from "../Table";
import Sider from "../Sider";
import Filelist from "../Filelist";
import { Router, Route, hashHistory,IndexRoute } from 'react-router';






var RouterSet = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Sider}>
          <IndexRoute component={Students}/>
          <Route path="/students" component={Students} />
          <Route path="/todo" component={Todo} />
          <Route path="/table" component={Table} />
          <Route path="/clound/*" component={Filelist} />
        </Route>

      </Router>
    )
  }
});
module.exports = RouterSet;