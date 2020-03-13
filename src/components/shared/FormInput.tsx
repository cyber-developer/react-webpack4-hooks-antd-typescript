import React from 'react';
import {Form, Input} from 'antd';

interface InputTypes {
  label: string,
  rules: any[],
  name: string,
  type: string
}

const FormInput = ({ label, rules, name, type }: InputTypes) => (
  <Form.Item
    label={label}
    name={name}
    rules={rules}
  >
    {
      type === 'input' 
      ? 
        <Input />
      :
        <Input.Password />
    }
  </Form.Item>
)

export default FormInput;
