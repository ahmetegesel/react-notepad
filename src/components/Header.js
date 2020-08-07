import React, { useContext } from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons'

import UserContext from '../contexts/userContext';

const { Header: HeaderAnt } = Layout;

function Header() {
  const { logout } = useContext(UserContext);

  return (
    <HeaderAnt style={{ padding: 0 }}>
      <Row align="middle" style={{ color: 'white', fontSize: '2.2rem' }}>
        <Col flex="1rem">
          <EditOutlined />
        </Col>
        <Col flex="auto">
          React Notepad
        </Col>
        <Col flex="1rem">
          <Button onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
    </HeaderAnt>
  );
}

export default Header;
