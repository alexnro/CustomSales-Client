import * as actionTypes from './actions';

const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {

            };
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};

export default reducer;