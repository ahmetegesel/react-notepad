import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DASHBOARD } from '../routes';
import { ACTION_LOGIN, UserContext } from '../contexts/userContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  const { dispatch: dispatchUser } = useContext(UserContext);

  const logUserIn = () => {
    if (username === 'admin' && password === 'admin') {
      dispatchUser({ type: ACTION_LOGIN });
      history.push(DASHBOARD);
    } else {
      setError('Invalid Credentials')
    }
  };

  return (
    <div>
      This is Login page
      <div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={logUserIn}>Login</button>
        {error && (<div>{error}</div>)}
      </div>
    </div>
  );
}

export default Login;
