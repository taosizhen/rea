import { FormInstance } from "antd";
import { Form, Input, Button } from "antd";
import "../static/css/login.css";
import React, { Component, createRef, RefObject } from "react";
import { Outlet } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};
const onReset = () => {
  console.log(88);
};
class Login extends Component {
  FormFef: RefObject<FormInstance>;
  constructor(props: any, context: any) {
    super(props, context);
    this.FormFef = createRef<FormInstance>();
  }

  render() {
    return (
      <>
        <Form className="login" ref={this.FormFef} {...layout}>
          <Form.Item label="用户名" name="name">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <Outlet />
      </>
    );
  }
}
export default Login;
