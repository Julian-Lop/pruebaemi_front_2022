import {useState} from "react"
import '../scss/components/Login.scss'

export default function Login(){

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

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email && user.password){
            return alert(user.email+'|'+user.password)
        }
        alert('there are empty fields')
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