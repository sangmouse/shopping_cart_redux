import React, { Component } from 'react';

class Products extends Component {

    render() {
        

        return (
            <div className="products">
                <div className="container">
                    <div className="body">
                        <h2 className="title text-center">Product List</h2>
                        <div className="row">
                            {this.props.showProducts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Products

