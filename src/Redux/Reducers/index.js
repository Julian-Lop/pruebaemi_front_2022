

const initialState = {
    user : [],
    recharge : false,
    message: 'anything'
}

function rootReducer(state = initialState, {type, payload, message}){
    switch(type){
        default:
            return state
    }
}

export default rootReducer