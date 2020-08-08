import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { compose } from 'ramda';

import DefaultLayout from '../layouts/DefaultLayout';
import { NoteDetailContext, withNoteDetail } from '../contexts/noteDetailContext';
import { NOTES } from '../routes';
import withTitle from '../utils/withTitle';
import useDocumentTitle from '../hooks/useDocumentTitle';
import withAuth from '../utils/withAuth';

function Note() {
  const { id } = useParams();

  const { fetch, save } = useContext(NoteDetailContext);
  const { setTitle: setDocTitle } = useDocumentTitle();
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

  useEffect(() => {
    setDocTitle(title || Note.name);
  }, [title, setDocTitle])

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
  withNoteDetail,
  withTitle(Note.name),
  withAuth,
)(Note);
