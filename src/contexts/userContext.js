import React, { createContext, useCallback, useReducer } from 'react';

import { signin } from '../services/auth';

export const UserContext = createContext({});

export const ACTION_LOGIN = 'LOGIN';
export const ACTION_LOGOUT = 'LOGOUT';
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_LOGIN:
      localStorage.setItem(process.env.REACT_APP_AUTH_STORAGE_KEY, JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_LOGOUT:
      localStorage.removeItem(process.env.REACT_APP_AUTH_STORAGE_KEY);
      return null;
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const initialValue = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE_KEY));
  const [user, dispatch] = useReducer(reducer, initialValue);

  const login = useCallback((username, password) => {
    return signin(username, password).then(loginData => {
      dispatch({ type: ACTION_LOGIN, payload: loginData });
      return loginData;
    });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: ACTION_LOGIN });
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
