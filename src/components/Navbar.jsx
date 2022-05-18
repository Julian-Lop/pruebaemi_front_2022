import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {logout} from "../Redux/Action/index"
import '../scss/components/Nav.scss'

export default function Navbar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.user)
    const photo = useSelector((state) => state.photos)

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
                    <Link to="/perfil"><img src={photo.length?photo.find(photo => photo.id === user.id).url:null} alt='FotoPerfil'></img></Link>
                </div>
                <div className='Logout'>
                    <label onClick={() => exitSession()}>Cerrar Sesión</label>
                </div>    
            </div>
        </div>
    )
}