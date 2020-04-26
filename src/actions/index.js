import * as Types from './../constants/TypeActions'


export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actDeleteProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}