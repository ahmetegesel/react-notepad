import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from '../contexts/userContext';
import { LOGIN } from '../routes';

const withAuth = Component => (props) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push(LOGIN);
    }
  }, [user, history]);

  return user && (
    <Component {...props} />
  );
}

export default withAuth;
