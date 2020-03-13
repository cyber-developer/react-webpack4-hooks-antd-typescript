const fields = [
  {
    formType: 'field',
    label: 'Email',
    name: 'email',
    type: 'input',
    rules: [{ required: true, message: 'Please input your email!' }]
  },
  {
    formType: 'field',
    label: 'Password',
    name: 'password',
    type: 'password',
    rules: [{ required: true, message: 'Please input your password!' }]
  },
  {
    formType: 'button',
    name: 'Login',
    type: 'primary',
    htmlType: 'submit'
  }
]

export default fields;