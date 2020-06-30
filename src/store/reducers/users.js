import * as actionTypes from '../actions';


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return action.users;
        case actionTypes.ADD_USER:
            return state.concat(action.user);
        case actionTypes.UPDATE_USER:
            return state.map(user => user.Id === action.user.Id ? action.user : user);
        case actionTypes.DELETE_USER:
            return state.filter(user => user.Id !== action.user.Id);
        default:
            return state;
    }
}

export default reducer;
