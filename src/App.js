import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import ProductContainer from './containers/ProductContainer';
import MessageContainer from './containers/MessageContainer'
import CartContainer from './containers/CartContainer';



class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <ProductContainer/>
                <MessageContainer/>
                <CartContainer/>
            </div>
        );
    }
}

export default App;

