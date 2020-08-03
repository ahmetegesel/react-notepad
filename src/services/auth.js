import { signin } from '../api/noteApi';

export const login = async (username, password) => {
  const loginData = await signin(username, password).catch(console.error);

  if (loginData.accessToken) {
    localStorage.setItem(process.env.REACT_APP_AUTH_STORAGE_KEY, loginData.accessToken);
  } else {
    throw new Error(loginData.message || 'Invalid Credentials');
  }

  return loginData;
};
