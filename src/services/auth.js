import { signin as signinReq } from '../api/noteApi';

export const signin = async (username, password) => {
  const loginData = await signinReq(username, password).catch(console.error);

  if (!loginData.accessToken) {
    throw new Error(loginData.message || 'Invalid Credentials');
  }

  return loginData;
};
