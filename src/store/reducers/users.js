import * as actionTypes from '../actions';


const initialState = {
    Username: "",
    IsAuth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                Username: action.username,
                IsAuth: true
            }
        default:
            return state;
    }
}

export default reducer;
