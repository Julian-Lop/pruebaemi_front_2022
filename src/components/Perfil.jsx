import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import WriteSection from './WriteSection'
import PublicationSection from './PublicationSection'
import FotosPerfil from './FotosPerfil'
import FriendSection from './FriendSection'
import ModalAddFriend from './ModalAddFriend'
import '../scss/components/Perfil.scss'
import image from '../images/imageperfil.png'
import { recharge } from '../Redux/Action'

export default function Perfil(){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)

    const [modal, setmodal] = useState(false)

    useEffect(()=>{
        dispatch(recharge())
    },[])

    return (
        <div className="Perfil">

            <div className='Grid-container'>
                <header className='Header'>
                    <div className='ImageBack'></div>
                </header>
                <nav className='Navbar'>
                    <div className='Photo'>
                        <img src={image} alt='fotoperfil'></img>
                    </div>
                    <div className='Info'>
                        <div className='InfoBasic'>
                            <div className='InfoName'>
                                <h1>{user?user.name:null}</h1>
                                <h3>{user.name?user.company.name:null}</h3>
                            </div>
                            <div className='InfoSta'>
                                <div>
                                    <input type="number" className='InputNum' value={38} readOnly></input>
                                    <input type="text" className='InputText' value="Siguiendo" readOnly></input>
                                </div>
                                <div>
                                    <input type="number" className='InputNum' value={38} readOnly></input>
                                    <input type="text" className='InputText' value="Seguidores" readOnly></input>
                                </div>
                            </div>
                        </div>
                        <div className='InfoAdd'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of type and scrambled it
                               to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </nav>
                <div className='Hr'><hr></hr></div>
                <aside className='Sidebar'>
                    <WriteSection/>
                    <PublicationSection/>
                </aside>
                <article className='Main'>
                    <FotosPerfil/>
                    <FriendSection modal={modal} setmodal={setmodal}/>
                </article> 
            </div>
            {modal?
            <ModalAddFriend modal={modal} setmodal={setmodal}/>
            :null
            }
        </div>
    )
}