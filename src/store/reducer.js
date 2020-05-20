import * as actionTypes from './actions';

const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {

            }
        default:
            return state;
    }
};

export default reducer;