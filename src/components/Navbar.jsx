import {useDispatch} from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {logout} from "../Redux/Action/index"
import image from '../images/imageperfil.png'
import '../scss/components/Nav.scss'

export default function Navbar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const exitSession = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className="Nav">
            <div className='Column1'>
                <div>
                    <label>Tiempo de trabajo activo</label>
                </div>
                <div className='CheckboxList'>
                    <div>
                        Oficina
                        <input type="checkbox"></input>
                    </div>
                    <div>
                        Almuerzo
                        <input type="checkbox"></input>
                    </div>
                    <div>
                        Descanso
                        <input type="checkbox"></input>
                    </div>
                    <div>
                        Reunión
                        <input type="checkbox"></input>
                    </div>
                </div>
            </div>
            <div className='Column2'>
                <div className='Bell'>
                    <i class="far fa-bell"></i>
                </div>
                <div className='PhotoUser'>
                    <Link to="/perfil"><img src={image} alt='FotoPerfil'></img></Link>
                </div>
                <div className='Logout'>
                    <label onClick={() => exitSession()}>Cerrar Sesión</label>
                </div>    
            </div>
        </div>
    )
}