import React, { createContext, useCallback, useEffect, useState } from 'react';

import dummyNoteApi from '../api/noteApi';

export const NotesContext = createContext([]);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetch = useCallback(async () => {
    setNotes(await dummyNoteApi.getNotes());
  }, [setNotes]);

  useEffect(() => {
    fetch();
  }, [fetch])

  return (
    <NotesContext.Provider value={[notes, fetch]}>
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
