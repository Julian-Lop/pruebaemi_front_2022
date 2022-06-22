import { 
    GET_USER,
    GET_ALL_USERS,
    GET_ALL_PHOTOS,
    GET_ALL_POSTS,
    GET_SUGGESTION,
    ADD_FRIEND,
    SEND_POST,
    GET_MY_POSTS,
    LOGOUT,
    ADD_LIKE,
    SEND_COMMENT
} from '../Action/types'

const initialState = {
    user : {},
    users : [],
    photos : [],
    posts : [],
    myPosts : [],
    comments : [],
    suggestions : [],
    myFriends : [],
    likes : []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_USER:
            return{
                ...state,
                user : payload[0],
                myFriends : state.users.filter(user => user.friends?user.friends.find(e => e === state.user.id)?user:null:null)
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
            return{
                ...state,
                posts : payload
            }
        
        case GET_MY_POSTS:
            let filteredPosts = state.posts.filter(post => {
                if(state.myFriends.find(friend => friend.id === post.userId) || state.user.id === post.userId){
                    return post
                }else{
                    return null
                }
            })

            return{
                ...state,
                myPosts : [],
                myPosts : filteredPosts
            }

        case GET_SUGGESTION:
            let myId = state.user.id
            let temp = state.myFriends.length?state.users.filter(user => {
                if(!state.myFriends.find(friend => friend.id === user.id)){
                    return user
                }else{
                    return null
                } 
            }):state.users

            return{
                ...state,
                suggestions : temp.filter(user => user.id !== myId)
            }

        case ADD_FRIEND:
            let userscurrent =  state.users

            return{
                ...state,
                users : userscurrent.map(user => {
                    if(user.id === state.user.id){
                        user.friends = user.friends ? [...user.friends, payload.id] : [payload.id]
                    }else if(user.id === payload.id){
                        user.friends = user.friends ? [...user.friends, state.user.id] : [state.user.id]
                    }
                    return user
                }),
                myFriends: userscurrent.filter(user => user.friends?user.friends.find(e => e === state.user.id)?user:null:null)
            }
        
        case ADD_LIKE:
            payload.userIdLike = state.user.id
            let exist = state.likes.filter(like => like.userIdLike === state.user.id)
            if(exist.length>0){
                exist = exist.filter(like => {
                    if(like.idPost === payload.idPost && like.userIdPost === payload.userIdPost){
                        return like
                    }
                })
            }      

            return{
                ...state,
                likes : exist.length>0 ? state.likes.filter(like => like.id !== exist[0].id ) : [...state.likes, payload] 
            }

        case SEND_POST:
            return{
                ...state,
                posts : [...state.posts, payload] 
            }
        
        case SEND_COMMENT:
            return{
                ...state,
                comments : [...state.comments, payload]
            }

        case LOGOUT:
            return{
                ...state,
                myPosts : [],
                myFriends : [],
                user: {}
            } 

        default:
            return state
    }
}

export default rootReducer