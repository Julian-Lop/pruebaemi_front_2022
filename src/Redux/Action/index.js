import axios from 'axios'
import {
    GET_USER,
    LOGOUT,
    GET_ALL_USERS,
    GET_ALL_PHOTOS,
    GET_ALL_POSTS,
    GET_SUGGESTION
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

export const getSuggestion = () => {
    return function(dispatch){
        try {
            return dispatch({type:GET_SUGGESTION})
        } catch (error) {
            console.log(error)
        }
    }
}