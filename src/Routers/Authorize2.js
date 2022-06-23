import {Navigate} from 'react-router-dom'

export const Authorize2 = ({children}) => {
    
    const token = localStorage.getItem('token')

    if(!token) return <Navigate to='/login'/>
    return children
}