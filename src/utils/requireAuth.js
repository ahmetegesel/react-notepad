import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN } from '../routes';
import { UserContext, withUserProvider } from '../contexts/userContext';

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const requireAuthWrapper = Component => ({ children, ...rest }) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { loggedIn } = user;

  if (!loggedIn) {
    history.push(LOGIN);
  }

  return (
    <Component children={children} />
  )
}

const requireAuth = compose(
  requireAuthWrapper,
  withUserProvider,
);

export default requireAuth;
