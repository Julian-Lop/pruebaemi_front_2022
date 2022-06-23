import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {logout} from "../Redux/Action/index"
import '../scss/components/Nav.scss'

export default function Navbar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.user)
    const photo = useSelector((state) => state.photos)

    const [crono, setcrono] = useState(false)

    var h4 = document.getElementsByTagName('h4')[0];
    var sec = localStorage.getItem('sec') ? localStorage.getItem('sec') : 0  
    var min = localStorage.getItem('min') ? localStorage.getItem('min') : 0 
    var hrs = localStorage.getItem('hrs') ? localStorage.getItem('hrs') : 0 
    var t ;

    const tick = () => {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
        localStorage.setItem('sec',sec)
        localStorage.setItem('min',min)
        localStorage.setItem('hrs',hrs)
    }

    const add = () => {
        tick();
        h4.textContent = (hrs > 9 ? hrs : "0" + hrs) 
                + ":" + (min > 9 ? min : "0" + min)
                + ":" + (sec > 9 ? sec : "0" + sec);
        timer();
    }

    const timer = () => {
        t = setTimeout(add, 1000);
    }

    const exitSession = () => {
        stop()
        dispatch(logout())
        localStorage.removeItem('sec')
        localStorage.removeItem('min')
        localStorage.removeItem('hrs')
        navigate('/')
    }

    let str = document.getElementById('switch1')
    let stp1 = document.getElementById('switch2')
    let stp2 = document.getElementById('switch3')
    

    async function start(){
        if(!str.checked){
            return stop()
        }
        let tm = await timer()
        if(str.checked){
            stp1.checked = false
            stp2.checked = false
        }
    }

    function stop() {
        clearTimeout(t)
        str.checked = false
    }
   

    return (
        <div className="Nav">
            <div className='Column1'>
                <div className='time'>
                    <label >Tiempo de trabajo activo: </label><h4><time>00:00:00</time></h4>
                </div>
                <div className='CheckboxList'>
                    <div>
                        Oficina
                        <input type="checkbox" id="switch1" onChange={() => start()}></input>
                        <label for="switch1" className='lbl'></label>
                    </div>
                    <div>
                        Almuerzo
                        <input type="checkbox" id="switch2" onChange={() => stop()}></input>
                        <label for="switch2" className='lbl'></label>
                    </div>
                    <div>
                        Descanso
                        <input type="checkbox" id="switch3" onChange={() => stop()}></input>
                        <label for="switch3" className='lbl'></label>
                    </div>
                    <div>
                        Reunión
                        <input type="checkbox" id="switch4"></input>
                        <label for="switch4" className='lbl'></label>
                    </div>
                </div>
            </div>
            <div className='Column2'>
                <div className='Bell'>
                    <i className="far fa-bell"></i>
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