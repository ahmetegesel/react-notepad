import React, { memo, useContext } from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { useHistory } from 'react-router-dom';

import UserContext from '../contexts/userContext';
import Logo from './Logo';

const { Header: HeaderAnt } = Layout;

function Header() {
  const { logout } = useContext(UserContext);
  const history = useHistory();

  return (
    <HeaderAnt style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row align="middle" style={{ color: 'white', fontSize: '2.0rem' }}>
        <Logo />
        <Col flex="auto">
          <Menu
            style={{ display: 'flex' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['dashboard']}
          >
            <Menu.Item
              key="dashboard"
              onClick={() => history.push('/')}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="mynotes"
              onClick={() => history.push('/note')}
            >
              My Notes
            </Menu.Item>
            <Menu.Item
              key="logout"
              onClick={logout}
              style={{ marginLeft: 'auto' }}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </HeaderAnt>
  );
}

export default memo(Header);
