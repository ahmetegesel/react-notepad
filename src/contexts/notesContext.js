import React, { createContext } from 'react';

import dummyNoteApi from '../api/noteApi';
import useAsyncEffect from '../hooks/useAsyncEffect';

export const NotesContext = createContext([]);

const NotesProvider = ({ children }) => {
  const [notes, error] = useAsyncEffect(dummyNoteApi.getNotes, [], []);

  return (
    <NotesContext.Provider value={[notes, error]}>
      {children}
    </NotesContext.Provider>
  );
};

export const withNotes = Component => ({ children, ...props }) => (
  <NotesProvider>
    <Component {...props} children={children} />
  </NotesProvider>
);

export default NotesProvider;
