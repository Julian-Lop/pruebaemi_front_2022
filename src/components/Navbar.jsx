import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {logout} from "../Redux/Action/index"
import '../scss/components/Nav.scss'

export default function Navbar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.user)
    const photosProfile = useSelector((state) => state.photosProfile)

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
    let stp3 = document.getElementById('switch4')
    

    async function start(){
        if(!str.checked){
            return stop()
        }
        let tm = await timer()
        if(str.checked){
            stp1.checked = false
            stp2.checked = false
            stp3.checked = false
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
                        <label htmlFor="switch1" className='lbl'></label>
                    </div>
                    <div>
                        Almuerzo
                        <input type="checkbox" id="switch2" onChange={() => stop()}></input>
                        <label htmlFor="switch2" className='lbl'></label>
                    </div>
                    <div>
                        Descanso
                        <input type="checkbox" id="switch3" onChange={() => stop()}></input>
                        <label htmlFor="switch3" className='lbl'></label>
                    </div>
                    <div>
                        Reuni??n
                        <input type="checkbox" id="switch4" onChange={() => stop()}></input>
                        <label htmlFor="switch4" className='lbl'></label>
                    </div>
                </div>
            </div>
            <div className='Column2'>
                <div className='Bell'>
                    <i className="far fa-bell"></i>
                </div>
                <div className='PhotoUser'>
                    <Link to="/perfil"><img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (user.id*100)).download_url:null} alt='FotoPerfil'></img></Link>
                </div>
                <div className='Logout'>
                    <label onClick={() => exitSession()}>Cerrar Sesi??n</label>
                </div>    
            </div>
        </div>
    )
}