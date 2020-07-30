import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import dummyNoteApi from '../api/noteApi';
import { NOTES } from '../routes';
import DefaultLayout from '../layouts/DefaultLayout';

function Note() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: '', content: '' });
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      dummyNoteApi
        .getNote(id)
        .then(setNote)
        .catch(setError);
    }
  }, [id]);

  useEffect(() => {
    document.title = note.title;
  }, [note])

  const saveNote = useCallback(noteToSave => {
    dummyNoteApi
      .saveNote(noteToSave)
      .then(setNote)
      .then(() => history.push(NOTES))
      .catch(setError);
  }, [setNote, setError, history]);

  const handleTitle = ({ target }) => {
    const { value } = target;
    setNote({ ...note, title: value });
  };
  const handleContent = ({ target }) => {
    const { value } = target;
    setNote({ ...note, content: value });
  };

  const handleSave = () => {
    saveNote(note);
  }

  const { title, content } = note;

  return (
    <DefaultLayout>
      <div>
        <div>
          <label htmlFor="note-title">Title: </label>
          <input id="note-title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div>
          <label htmlFor="note">Note: </label>
          <textarea
            id="note"
            value={content}
            onChange={handleContent} />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => history.push('/note')}>Go Back to Notes</button>
        {error && <div>{error}</div>}
      </div>
    </DefaultLayout>
  )
}

export default Note;
