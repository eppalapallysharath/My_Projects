const initialState = {
login: {}
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "USER_LOGIN":
            return {...state, login: action.payload}

        case "LOGOUT":
            return {}

        default:
            return state
    }
}
