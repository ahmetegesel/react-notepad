import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { NotesContext, withNotes } from '../contexts/notesContext';

function Notes() {
  const [notes] = useContext(NotesContext);
  const history = useHistory();

  const handleItemClick = (e, id) => {
    e.preventDefault();
    history.push(`/note/${id}`);
  }

  return (
    <DefaultLayout>
      <div>
        <ul>
          {
            notes.map(
              note => (
                <li key={note.id}>
                  <a href={`/note/${note.id}`} onClick={(e) => handleItemClick(e, note.id)}>{note.title}</a>
                </li>
              )
            )
          }
        </ul>
        <button onClick={() => history.push('/note/new')}>New Note</button>
      </div>
    </DefaultLayout>
  );
}

export default withNotes(Notes);
