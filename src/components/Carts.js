import React, { Component } from 'react';

class Carts extends Component {

    render() {


        return (
            <div className="carts">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.showCarts}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Carts;

