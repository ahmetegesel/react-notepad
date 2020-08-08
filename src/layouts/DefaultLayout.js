import React from 'react';
import { Layout} from 'antd';

import Header from '../components/Header';

const { Footer } = Layout;

function DefaultLayout({ children }) {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header />
      <Layout style={{margin: '64px 16px 0 0'}}>
        { children }
      </Layout>
      <Footer style={{ textAlign: 'center' }}>React Notepad ©{new Date().getFullYear()} Created by Ahmet Egesel</Footer>
    </Layout>
  );
}

export default DefaultLayout;
