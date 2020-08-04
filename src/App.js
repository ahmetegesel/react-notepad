import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          {
            routes.map(routeProps => <Route key={routeProps.path} {...routeProps} />)
          }
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
