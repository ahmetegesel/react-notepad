import React, { createContext, useCallback } from 'react';
import dummyNoteApi from '../api/noteApi';

export const NoteDetailContext = createContext({});

const NoteDetailProvider = ({ children }) => {
  const fetch = useCallback(
    (id) => dummyNoteApi.getNote(id),
    []
  );

  const save = useCallback(
    (noteToSave) => dummyNoteApi.saveNote(noteToSave),
    []
  );

  return (
    <NoteDetailContext.Provider value={{ fetch, save }}>
      {children}
    </NoteDetailContext.Provider>
  );
};

export const withNoteDetail = Component => ({ children, ...props }) => (
  <NoteDetailProvider>
    <Component {...props} children={children} />
  </NoteDetailProvider>
);

export default NoteDetailProvider;
