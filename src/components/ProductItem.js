import React, { Component } from 'react';


class ProductItem extends Component {

    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
    
    render() {
        var {product} = this.props
        
        return (
            <div className="col-3">
                <div className="product">
                    <div className="p-img"><img src={product.image} alt="" /></div>
                    <div className="p-name">{product.name}</div>
                    <div className="p-rate">
                        <ul className="rate">
                            
                        </ul>
                    </div>
                    <div className="p-desc">{product.description}</div>
                    <div className="p-price">{product.price}$</div>
                    <div className="p-buy">
                        <button
                            type="button"
                            className="buy"
                            href=" "
                            onClick={() => this.onAddToCart(product)}
                        >
                            <i className="fa fa-shopping-cart" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductItem;
