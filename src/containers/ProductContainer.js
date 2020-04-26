import React, { Component } from 'react';
import Products from '../components/Products';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { actAddToCart } from '../actions';

class ProductContainer extends Component {

    showProducts = (products) => {
        var result= null
        var {onAddToCart} = this.props
        
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                )
            })
        }

        return result
    }
  
  render() {
      var {products} = this.props
      
    return (
      <div>
          <Products showProducts = {this.showProducts(products)}>

          </Products>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);

