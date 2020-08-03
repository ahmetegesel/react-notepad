import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Col, Row } from 'antd';

import { DASHBOARD } from '../routes';
import { ACTION_LOGIN, UserContext } from '../contexts/userContext';
import UnauthorizedLayout from '../layouts/UnauthorizedLayout';
import { login } from '../services/auth';

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

  const onFinish = ({ username, password }) => {
    login(username, password).then(data => {
      dispatchUser({ type: ACTION_LOGIN });
      history.push(DASHBOARD);
    }).catch(err => setError(err.message));
  };

  const history = useHistory();
  const { dispatch: dispatchUser } = useContext(UserContext);

  return (
    <UnauthorizedLayout>
      <Row align="middle" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <Col>
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
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
              <Button type="primary" htmlType="submit">
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
