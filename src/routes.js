import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Note from './views/Note';
import Notes from './views/Notes';

export const DASHBOARD = '/';
export const LOGIN = '/login';
export const NOTES = '/note';
export const NOTE_NEW = '/note/new';
export const NOTE = '/note/:id';

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
  {
    path: NOTES,
    component: Notes,
    exact: true,
  },
  {
    path: NOTE_NEW,
    component: Note
  },
  {
    path: NOTE,
    component: Note
  }
];

export default routes;
