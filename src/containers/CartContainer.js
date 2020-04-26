import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './../components/CartItem'
import Carts from './../components/Carts'
import {actDeleteProductInCart, actUpdateQuantity} from './../actions/index'

class CartContainer extends Component {

    showCarts = (carts) => {
        var result = null
        var {onDeleteProductInCart, onUpdateQuantity} = this.props

        if(carts.length > 0){
            result = carts.map((cart, index) => {
                return (
                    <CartItem
                        key={index}
                        cart={cart}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                )
            })
        }
        return result
    }

    render() {

        var {carts} = this.props
        

        return (
            <Carts showCarts={this.showCarts(carts)}>

            </Carts>
    );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        carts: state.carts
    }
}   
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onUpdateQuantity: (product, quantity) => {
            dispatch(actUpdateQuantity(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

