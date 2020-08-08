import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from '../contexts/userContext';
import { LOGIN } from '../routes';


const withAuth = Component => (props) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  if (!user) {
    history.push(LOGIN);
    return null;
  }

  return (
    <Component {...props} />
  )
}
export default withAuth;
