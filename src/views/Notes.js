import React from 'react';
import { useHistory } from 'react-router-dom';
import { compose } from 'ramda';

import { Layout, Menu, Empty, Button } from 'antd';

import withPageTitle from '../utils/withPageTitle';
import withAuth from '../utils/withAuth';
import useAsyncEffect from '../hooks/useAsyncEffect';

import dummyNoteApi from '../api/noteApi';

import DefaultLayout from '../layouts/DefaultLayout';

const { Sider, Content } = Layout;

function Notes() {
  const [notes] = useAsyncEffect(dummyNoteApi.getNotes, [], []);
  const history = useHistory();

  return (
    <DefaultLayout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {
            notes.map(
              note => (
                <Menu.Item
                  key={note.id}
                  onClick={() => history.push(`/note/${note.id}`)}
                >
                  {note.title}
                </Menu.Item>
              )
            )
          }
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
            }}
            description={
              <span>
                No Note Selected. Select from left side or
              </span>
            }
          >
            <Button type="primary" onClick={() => history.push('/note/new')}>Create Now</Button>
          </Empty>
        </Content>
      </Layout>
    </DefaultLayout>
  );
}

export default compose(
  withPageTitle(Notes.name),
  withAuth,
)(Notes);
