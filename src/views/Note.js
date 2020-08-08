import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { compose } from 'ramda';

import withPageTitle from '../utils/withPageTitle';
import withAuth from '../utils/withAuth';
import useAsync from '../hooks/useAsync';
import { NOTES } from '../routes';

import dummyNoteApi from '../api/noteApi';

import DefaultLayout from '../layouts/DefaultLayout';
import { useTitleEffect } from '../hooks/useTitle';

function Note() {
  const { id } = useParams();

  const [, fetch]  = useAsync(() => dummyNoteApi.getNote(id), [id]);
  const [, save]  = useAsync((noteToSave) => dummyNoteApi.saveNote(noteToSave));

  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (id) {
      fetch(id).then(noteDetail => {
        setTitleInput(noteDetail.title);
        setContentInput(noteDetail.content);
      });
    }
  }, [id, fetch, setTitleInput, setContentInput]);

  const newNoteTitle = !id && 'New Note';
  useTitleEffect(titleInput || newNoteTitle);

  const handleTitle = ({ target }) => {
    const { value } = target;
    setTitleInput(value);
  };

  const handleSave = () => {
    save({
      id,
      title: titleInput,
      content: contentInput
    }).then(() => history.push(NOTES));
  };

  return (
    <DefaultLayout>
      <div>
        <div>
          <label htmlFor="note-title">Title: </label>
          <input id="note-title" type="text" value={titleInput} onChange={handleTitle} />
        </div>
        <div>
          <label htmlFor="note">Note: </label>
          <textarea
            id="note"
            value={contentInput}
            onChange={({ target }) => setContentInput(target.value)} />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => history.push('/note')}>Go Back to Notes</button>
      </div>
    </DefaultLayout>
  )
}

export default compose(
  withPageTitle(Note.name),
  withAuth,
)(Note);
