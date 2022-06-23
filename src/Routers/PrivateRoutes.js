import {useEffect} from "react"
import {Route, Routes, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getUser} from "../Redux/Action/index"
import Navbar from "../components/Navbar"
import Perfil from "../components/Perfil"
import Fotos from "../components/Fotos"

export default function PrivateRoutes(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect( ()=>{
        const token = localStorage.getItem('token')
        if(!token) return navigate('/')
        async function fetchData(){
            let temp = await dispatch(getUser(token))
            if(!temp.payload[0].name) return navigate('/')
        }
        fetchData()    
    },[])

    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/perfil' element={<Perfil/>}/>
                <Route path='/fotos' element={<Fotos/>}/>
            </Routes>
        </div>
    )
}