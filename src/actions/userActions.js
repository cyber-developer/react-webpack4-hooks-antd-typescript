const login = (userObj) => {
  return {
    type: 'USER_SIGNIN',
    payload: userObj
  }
}

export default login;
