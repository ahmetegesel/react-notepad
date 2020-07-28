import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN } from '../routes';
import { UserContext, withUserProvider } from '../contexts/userContext';
import compose from '../../lib/compose';

const withAuthWrapper = Component => ({ children, ...rest }) => {
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

const withAuth = compose(
  withAuthWrapper,
  withUserProvider,
);

export default withAuth;
