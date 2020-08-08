import React from 'react';
import { Layout} from 'antd';

import Header from '../components/Header';

const { Content, Footer } = Layout;

function DefaultLayout({ children }) {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        { children }
      </Content>
      <Footer style={{ textAlign: 'center' }}>React Notepad ©{new Date().getFullYear()} Created by Ahmet Egesel</Footer>
    </Layout>
  );
}

export default DefaultLayout;
