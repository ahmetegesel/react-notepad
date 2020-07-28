import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import UserProvider from './contexts/userContext';

function Layout() {

  return (
    <div>
      <Header />
      <Router>
        <UserProvider>
          <Switch>
            {
              routes.map(routeProps => <Route key={routeProps.path} {...routeProps} />)
            }
          </Switch>
        </UserProvider>
      </Router>
      <Footer />
    </div>
  )

}

export default Layout;
