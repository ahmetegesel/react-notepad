import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { compose } from 'ramda';
import { Form, Input, Button } from 'antd';

import withPageTitle from '../utils/withPageTitle';
import withAuth from '../utils/withAuth';
import useAsync from '../hooks/useAsync';
import { NOTES } from '../routes';

import dummyNoteApi from '../api/noteApi';

import DefaultLayout from '../layouts/DefaultLayout';
import { useTitleEffect } from '../hooks/useTitle';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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
      <Form
        {...layout}
        name="basic"
        initialValues={{
          title :titleInput,
          content: contentInput,
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          valuePropName="title"
        >
          <Input value={titleInput} onChange={handleTitle} />
        </Form.Item>

        <Form.Item
          label="Note"
          name="content"
          valuePropName="content"
        >
          <Input.TextArea
            value={contentInput}
            onChange={({ target }) => setContentInput(target.value)}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            onClick={() => history.push('/note')}
          >
            Go back to Notes
          </Button>
        </Form.Item>
      </Form>
    </DefaultLayout>
  )
}

export default compose(
  withPageTitle(Note.name),
  withAuth,
)(Note);
