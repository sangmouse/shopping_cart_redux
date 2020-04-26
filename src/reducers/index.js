import {combineReducers} from 'redux'
import products from './products'
import message from './message'
import carts from './carts'


const appReducers = combineReducers({
    products,
    message,
    carts
})

export default appReducers