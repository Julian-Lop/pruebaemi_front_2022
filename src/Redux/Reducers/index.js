import { 
    GET_USER,
    GET_ALL_USERS,
    GET_ALL_PHOTOS,
    GET_ALL_POSTS,
    GET_SUGGESTION,
    ADD_FRIEND,
    SEND_POST
} from '../Action/types'

const initialState = {
    user : {},
    users : [],
    photos : [],
    posts : [],
    myPosts : [],
    suggestions : [],
    myFriends : [],
    likes : []
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
                photos : payload.slice(0,54)
            }

        case GET_ALL_POSTS:
            let postmyfriends = payload.filter(post => {
                if(state.myFriends.find(friend => friend.id == post.userId)){
                    return post
                }
            })
     
            return{
                ...state,
                posts : postmyfriends
            }

        case GET_SUGGESTION:
            let myId = state.user.id
            let temp = state.myFriends.length?state.users.filter(user => {
                if(!state.myFriends.find(friend => friend.id === user.id)){
                    return user
                } 
            }):state.users

            return{
                ...state,
                suggestions : temp.filter(user => user.id !== myId)
            }

        case ADD_FRIEND:
            return{
                ...state,
                myFriends: [...state.myFriends,payload]
            }
            
        case SEND_POST:
            state.myPosts.length?state.posts.concat(state.myPosts):state.posts.concat([payload])
            return{
                ...state,
                myPosts : [...state.myPosts,payload]
            }    
        default:
            return state
    }
}

export default rootReducer