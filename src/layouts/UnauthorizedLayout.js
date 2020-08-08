import React from 'react';
import { Layout} from 'antd';

function UnauthorizedLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default UnauthorizedLayout;
