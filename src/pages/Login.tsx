import React from 'react';
import {Form, Row} from 'antd';

import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';

import fields from '../utils/Forms/LoginFormFields';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = (values : any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo : any) => {
    console.log('Failed:', errorInfo);
  };

  const getField = (field: any) => {
    switch(field.formType) {
      case 'field':
      return (
        <FormInput 
          label={field.label}
          name={field.name}
          type={field.type}
          rules={field.rules}
        />
      )
      case 'button':
      return (
          <FormButton
          layout={tailLayout}
          name={field.name}
          type={field.type}
          htmlType={field.htmlType}
        />
      )
    }
  }

  return (
    <Row justify='center' align='middle' className='container'>
      <Form
        {...layout}
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {
          fields.map((field, key) => {
            return (
              <React.Fragment key={key}>
                {getField(field)}
              </React.Fragment>
            )
          })
        }
      </Form>
    </Row>
  )
}

export default Login;
