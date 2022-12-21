const initialState = {
    login: {},
}

export const LoginReducer = (state = initialState, action) => {
 switch (action.type) {
    case "LOGIN_USER":
        return {...state, login: action.payload}
    default:
      return state
 }
}
