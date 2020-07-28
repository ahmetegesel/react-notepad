import Dashboard from './views/Dashboard';
import Login from './views/Login';

export const DASHBOARD = '/';
export const LOGIN = '/login';

const routes = [
  {
    path: DASHBOARD,
    component: Dashboard,
    exact: true
  },
  {
    path: LOGIN,
    component: Login,
  },
];

export default routes;
