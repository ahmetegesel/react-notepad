import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { UserProvider } from './contexts/userContext';
import { MetaProvider } from './contexts/metaContext';

function App() {
  return (
    <Router>
      <MetaProvider>
        <UserProvider>
          <Switch>
            {
              routes.map(routeProps => <Route key={routeProps.path} {...routeProps} />)
            }
          </Switch>
        </UserProvider>
      </MetaProvider>
    </Router>
  );
}

export default App;
