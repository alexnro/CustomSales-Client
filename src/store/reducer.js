import * as actionTypes from './actions';
import productData from '../productData.json';

// cambiado temporalmente para no necesitar la API en el despliegue
const initialState = {
    products: productData
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