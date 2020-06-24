import * as actionTypes from '../actions';


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORDERS:
            return action.orders;
        case actionTypes.ADD_ORDER:
            action.order.Id = action.Id;
            return state.concat(action.order);
        default:
            return state;
    }
}

export default reducer;
