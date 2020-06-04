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
        case actionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.Id === action.updatedProduct.Id ? action.updatedProduct : product)
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.Id !== action.productId)
            }
        default:
            return state;
    }
};

export default reducer;