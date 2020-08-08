import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { compose } from 'ramda';

import DefaultLayout from '../layouts/DefaultLayout';
import { NOTES } from '../routes';
import withTitle from '../utils/withTitle';
import withAuth from '../utils/withAuth';
import dummyNoteApi from '../api/noteApi';
import useAsync from '../hooks/useAsync';

function Note() {
  const { id } = useParams();

  const [, fetch]  = useAsync(() => dummyNoteApi.getNote(id), [id]);
  const [, save]  = useAsync((noteToSave) => dummyNoteApi.saveNote(noteToSave));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (id) {
      fetch(id).then(noteDetail => {
        setTitle(noteDetail.title);
        setContent(noteDetail.content);
      });
    }
  }, [id, fetch, setTitle, setContent]);

  const handleTitle = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const handleSave = () => {
    save({
      id,
      title,
      content
    }).then(() => history.push(NOTES));
  }

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
            onChange={({ target }) => setContent(target.value)} />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => history.push('/note')}>Go Back to Notes</button>
      </div>
    </DefaultLayout>
  )
}

export default compose(
  withTitle(Note.name),
  withAuth,
)(Note);
