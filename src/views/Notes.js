import React  from 'react';
import { useHistory } from 'react-router-dom';
import { compose } from 'ramda';

import withPageTitle from '../utils/withPageTitle';
import withAuth from '../utils/withAuth';
import useAsyncEffect from '../hooks/useAsyncEffect';

import dummyNoteApi from '../api/noteApi';

import DefaultLayout from '../layouts/DefaultLayout';

function Notes() {
  const [notes] = useAsyncEffect(dummyNoteApi.getNotes, [], []);
  const history = useHistory();

  const handleItemClick = (e, id) => {
    e.preventDefault();
    history.push(`/note/${id}`);
  };

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

export default compose(
  withPageTitle(Notes.name),
  withAuth,
)(Notes);
