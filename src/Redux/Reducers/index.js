import { 
    GET_USER,
    GET_ALL_USERS,
    GET_ALL_PHOTOS,
    GET_ALL_POSTS,
    GET_SUGGESTION
} from '../Action/types'

const initialState = {
    user : {},
    users : [],
    photos : [],
    posts : [],
    suggestions : []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_USER:
            return{
                ...state,
                user : payload[0]
            }
        case GET_ALL_USERS:
            return{
                ...state,
                users : payload
            }
        case GET_ALL_PHOTOS:
            return{
                ...state,
                photos : payload
            }
        case GET_ALL_POSTS:
            return{
                ...state,
                posts : payload
            }
        case GET_SUGGESTION:
            return{
                ...state,
                suggestions : state.users.slice(0,5)
            }                
        default:
            return state
    }
}

export default rootReducer