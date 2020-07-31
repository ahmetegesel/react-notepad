import React, { createContext, useReducer } from 'react';

export const UserContext = createContext({ loggedIn: false });

export const ACTION_LOGIN = 'LOGIN';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, { loggedIn: false });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const withUserProvider = Component => ({ children, ...props }) => (
  <UserProvider>
    <Component { ...props } children={children} />
  </UserProvider>
)

export default UserProvider;
