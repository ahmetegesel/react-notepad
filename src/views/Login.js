import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Col, Row } from 'antd';

import { DASHBOARD } from '../routes';
import UserContext from '../contexts/userContext';
import UnauthorizedLayout from '../layouts/UnauthorizedLayout';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useContext(UserContext);

  const history = useHistory();

  const handleLoginClick = () => {
    login(username, password)
      .then(() => history.push(DASHBOARD))
      .catch(err => setError(err.message));
  };

  return (
    <UnauthorizedLayout>
      <Row align="middle" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <Col>
          <Form
            {...layout}
            name="basic"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input value={username}
                     onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password value={password}
                              onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={handleLoginClick}>
                Login
              </Button>
            </Form.Item>

            {error && (<div>{error}</div>)}
          </Form>
        </Col>
      </Row>
    </UnauthorizedLayout>
  );
}

export default Login;
