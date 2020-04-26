import React, { Component } from 'react';

class CartResult extends Component {
  

  render() {
    return (
      <div className="container">
          <div className="cart-result">
                <ul>
                    <li>
                        <h3>Total</h3>
                    </li>
                    <li>
                        <h3>3640$</h3>
                    </li>
                    <li>
                        <button>Complete purchase</button>
                    </li>
                </ul>
          </div>
      </div>
    );
  }
}

export default CartResult;
