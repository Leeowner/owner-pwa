import React, { Component } from 'react';
import AppShell from './AppShell';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Notification from './Notification';

class App extends Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/notification" component={Notification} />
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;