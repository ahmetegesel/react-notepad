import React, { useEffect, useState } from 'react';
import dummyNoteApi from '../api/noteApi';

import { useHistory } from 'react-router-dom';

function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log('here');
    dummyNoteApi.getNotes().then(setNotes);
  }, [setNotes]);

  const handleItemClick = (e, id) => {
    e.preventDefault();
    history.push(`/note/${id}`);
  }

  return (
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
  );
}

export default Notes;
