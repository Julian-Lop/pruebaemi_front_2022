import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getUser} from '../Redux/Action'
import '../scss/components/Login.scss'

export default function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setuser] = useState({
        email:null,
        password:null
    })

    const habldeChange = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        if(user.email && user.password){
            await dispatch(getUser(user.email,Number(user.password)))
            user.email = ''
            user.password = ''
            if(!localStorage.getItem('token')){
                console.log('incorrectos')
                return alert('contraseña o email incorrectos')
            }
            return navigate('/perfil')
        }
        alert('hay campos vacios')
    }

    return (
        <div className="Login">
            <form onSubmit={e => handleSubmit(e)}>
                <h1>Bienvenido</h1>
                <p>Inicia sesión en tu cuenta para empezar tu jornada laboral.
                Esperamos que tengas un excelente día.</p>
                
                <div className='InputsContainer'>
                    <input type='email' name="email" value={user.email} onChange={e => habldeChange(e)} placeholder=" Correo electrónico" className='Input'></input>
                    
                    <input type='password' name="password" value={user.password} onChange={e => habldeChange(e)} placeholder=" Contraseña" className='Input'></input>
                   
                    <div className='CheckboxContainer'>
                        <input type="checkbox" className='Checkbox'></input>
                        <label>Mantenerme conectado</label>
                    </div>
                </div>

                <hr></hr>
                <div className='ContainerButton'>
                    <label>Recuperar contraseña</label>
                    <button type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}