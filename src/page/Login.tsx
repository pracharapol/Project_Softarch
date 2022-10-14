import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
  return (
    <Form
      name="basic"
      labelCol={{ span: isMobile ? 2 : 8 }}
      wrapperCol={{ span: isMobile ? 3 : 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          <Link to="/Home">Submit</Link>

        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;