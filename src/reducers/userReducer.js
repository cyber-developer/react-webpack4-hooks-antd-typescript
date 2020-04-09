const initialState = {
  user: {}
};

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload
      }
    default: {
      return initialState
    }
  }
}

export default userReducer;
