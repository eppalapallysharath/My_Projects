const initialState = {
  signUp: {},
  verify: {}
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, signUp: action.payload };

    case "VERIFY_EMAIL":
      return {...state, verify:action.payload}

    default:
      return state;
  }
};
