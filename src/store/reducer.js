import * as actionTypes from './actions';


const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.newProduct)
            };
        default:
            return state;
    }
};

export default reducer;