import * as actionTypes from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLIENTS:
            return action.clients;
        case actionTypes.ADD_CLIENT:
            return state.concat(action.client);
        case actionTypes.UPDATE_CLIENT:
            return state.map(client => client.Id === action.client.Id ? action.client : client);
        default:
            return state;
    }
}

export default reducer;
