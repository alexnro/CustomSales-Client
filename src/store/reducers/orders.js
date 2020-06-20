import * as actionTypes from '../actions';


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ORDER:
            return state.concat(action.order);
        default:
            return state;
    }
}

export default reducer;
