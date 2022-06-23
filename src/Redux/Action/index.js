import axios from 'axios'
import {
    GET_USER,
    LOGOUT,
    GET_ALL_USERS,
    GET_ALL_PHOTOS,
    GET_ALL_POSTS,
    GET_MY_POSTS,
    GET_SUGGESTION,
    ADD_FRIEND,
    SEND_POST,
    RESET_POSTS,
    ADD_LIKE,
    SEND_COMMENT,
    GET_PHOTOS_PROFILE
}
from './types'

export const getUser = (email,id) => {
    return async function(dispatch){
        try {
            let json = await axios('https://jsonplaceholder.typicode.com/users?email='+email)
            if(Number(json.data[0]?.id) === Number(id)){
                localStorage.setItem('token',email) 
                return dispatch({type: GET_USER, payload: json.data})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const recharge = () => {
    let token = localStorage.getItem('token')
    return async function(dispatch){
        try {
            let json = await axios('https://jsonplaceholder.typicode.com/users?email='+token)
            if(json.data.length) 
            return dispatch({type: GET_USER, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}


export const logout = () => {
    return function(dispatch){
        localStorage.clear()
        return dispatch({type: LOGOUT})
    }
}

export const getAllUsers = () => {
    return async function(dispatch){
        try {
            let json = await  axios('https://jsonplaceholder.typicode.com/users')
            return dispatch({type:GET_ALL_USERS, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPhotosProfile = () => {
    return async function(dispatch){
        try {
            let photosProfile = []
            for(let i=0; i < 10; i++){
                let ID = ((i+1)*100)
                let json = await axios(`https://picsum.photos/id/${ID}/info`)
                photosProfile.push(json.data)
            }
            return dispatch({type:GET_PHOTOS_PROFILE, payload:photosProfile})
        } catch (error) {
            
        }
    }
}

export const getAllPhotos = () => {
    return async function(dispatch){
        try {
            let json = await axios('https://picsum.photos/v2/list?page=1&limit=54')
            return dispatch({type:GET_ALL_PHOTOS,payload:json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllPosts = () => {
    return async function(dispatch){
        try {
            let json = await axios('https://jsonplaceholder.typicode.com/posts')
            return dispatch({type:GET_ALL_POSTS,payload:json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getMyPosts = () => {
    return function(dispatch){
        try {
          return dispatch({type:GET_MY_POSTS, payload:null})  
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSuggestion = () => {
    return function(dispatch){
        try {
            return dispatch({type:GET_SUGGESTION})
        } catch (error) {
            console.log(error)
        }
    }
}

export const addFriend = (friend) => {
    return function(dispatch){
        try {
            return dispatch({type:ADD_FRIEND, payload:friend})
        } catch (error) {
            console.log(error)
        }
    }
}

export const sendPost = (post) => {
    return function(dispatch){
        try {
            return dispatch({type:SEND_POST, payload:post})
        } catch (error) {
            console.log(error)
        }
    }
}

export const resetPosts = () => {
    return function(dispatch){
        try {
            return dispatch({type:RESET_POSTS, payload:'reset'})
        } catch (error) {
            console.log(error)
        }
    }
}

export const addLike = (like) => {
    return function(dispatch){
        try {
            return dispatch({type:ADD_LIKE, payload:like})
        } catch (error) {
            console.log(error)
        }
    }
}

export const sendComment = (comment) => {
    return function(dispatch){
        try {
            return dispatch({type:SEND_COMMENT, payload:comment})
        } catch (error) {
            console.log()
        }
    }
}