import React, { Component } from 'react';



class CartItem extends Component {

    showTotal = (price, quantity) => {
        return price * quantity
    }
    onDeleteProductInCart = (product) => {
        this.props.onDeleteProductInCart(product)
    }
    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            this.props.onUpdateQuantity(product,quantity)
        }
    }

    render() {

        var { cart } = this.props


        return (
            <tr>
                <td> <img src={cart.product.image} alt=" " /> </td>
                <td>{cart.product.name}</td>
                <td>{cart.product.price}$</td>
                <td>
                    <span className="quantity">{cart.quantity}</span>
                    <div className="btn-group" role="group">

                        <button type="button" className="btn btn-secondary" onClick={() => this.onUpdateQuantity(cart.product, cart.quantity - 1)}>-</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.onUpdateQuantity(cart.product, cart.quantity + 1)}>+</button>
                    </div>
                </td>
                <td>{this.showTotal(cart.product.price, cart.quantity)}$</td>
                <td>
                    <button
                        className="btn-delete"
                        href=" "
                        onClick={() => this.onDeleteProductInCart(cart.product)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>

        );
    }
}

export default CartItem;

