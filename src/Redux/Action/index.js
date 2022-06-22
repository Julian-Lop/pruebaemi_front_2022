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
    SEND_COMMENT
}
from './types'

export const getUser = (email) => {
    return async function(dispatch){
        try {
            let json = await axios('https://jsonplaceholder.typicode.com/users?email='+email)
            if(json.data.length) localStorage.setItem('token',email)
            return dispatch({type: GET_USER, payload: json.data})
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

export const getAllPhotos = () => {
    return async function(dispatch){
        try {
            let json = await axios('https://jsonplaceholder.typicode.com/photos')
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

export const addComment = (comment) => {
    return function(dispatch){
        try {
            return dispatch({type:SEND_COMMENT, payload:comment})
        } catch (error) {
            console.log()
        }
    }
}