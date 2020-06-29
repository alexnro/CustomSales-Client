import * as actionTypes from '../actions';


const initialState = {
    Username: "",
    Role: "",
    IsAuth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                Username: action.user.Username,
                Role: action.user.Role,
                IsAuth: true
            }
        case actionTypes.LOGOUT_USER:
            return {
                Username: "",
                Role: "",
                IsAuth: false
            }
        default:
            return state;
    }
}

export default reducer;
