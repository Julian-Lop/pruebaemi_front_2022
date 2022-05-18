import { GET_USER

} from '../Action/types'

const initialState = {
    user : {}
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_USER:
            return{
                ...state,
                user : payload[0]
            }

        default:
            return state
    }
}

export default rootReducer