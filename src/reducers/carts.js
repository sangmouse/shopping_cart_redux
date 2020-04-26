import * as Types from './../constants/TypeActions'


var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []

var findIndexInCart = (carts, product) => {
    var index = -1
    if (carts.length > 0) {
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].product.id === product.id) {
                index = i
                break
            }
        }
        
    }
    return index
}



const carts = (state = initialState, action) => {

    var { product, quantity } = action
    var index = -1

    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findIndexInCart(state, product)
        
            if (index !== -1) {
                state[index].quantity = state[index].quantity + quantity
            }else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case Types.DELETE_PRODUCT_IN_CART:
            index = findIndexInCart(state, product)
            if(index !== -1){
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case Types.UPDATE_PRODUCT_IN_CART:
            index = findIndexInCart(state, product)
            if(index !== -1){
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        default:
            return [...state]
    }
}

export default carts