import axios from 'axios'
import {
    GET_USER,
    RECHARGE,
    LOGOUT
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