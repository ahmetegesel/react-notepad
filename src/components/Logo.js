import React, { memo } from 'react';

import { Col } from 'antd';
import { EditOutlined } from '@ant-design/icons'

function Logo() {
  return (
    <>
      <Col flex="40px">
        <EditOutlined />
      </Col>
      <Col flex="250px">
        React Notepad
      </Col>
    </>
  );
}

export default memo(Logo);
