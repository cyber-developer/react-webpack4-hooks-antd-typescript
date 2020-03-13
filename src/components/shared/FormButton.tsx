import React from 'react';
import {Form, Button} from 'antd';

interface ButtonProps {
  name: string,
  htmlType: any,
  type: any,
  layout: any
}

const FormButton = ({ layout, type, htmlType, name }: ButtonProps) => (
  <Form.Item {...layout}>
    <Button type={type} htmlType={htmlType}>{name}</Button>
  </Form.Item>
)

export default FormButton;
