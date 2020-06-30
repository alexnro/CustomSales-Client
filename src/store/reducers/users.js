import * as actionTypes from '../actions';


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return action.users;
        default:
            return state;
    }
}

export default reducer;
