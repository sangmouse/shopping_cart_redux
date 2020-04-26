import * as Message from './../constants/Message'


var initialState = Message.WELCOME_TO_SHOPPING_PAGE


const message = (state = initialState, action) => {
    switch(action.type){

        default:
            return [...state]
    }
}

export default message