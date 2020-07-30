import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { EditOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Content, Header, Footer, Sider } = Layout;

function DefaultLayout({ children }) {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header style={{ padding: 0 }}>
        <Row align="middle" style={{color: 'white', fontSize: '2.2rem'}}>
          <Col flex="1rem">
            <EditOutlined />
          </Col>
          <Col flex="auto">
            React Notepad
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            { children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Notepad ©{new Date().getFullYear()} Created by Ahmet Egesel</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;
