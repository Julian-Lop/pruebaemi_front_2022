import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { recharge,getAllUsers,getAllPhotos } from '../Redux/Action'
import '../scss/components/Perfil.scss'
import '../scss/components/Fotos.scss'

export default function Fotos(){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const photos = useSelector((state) => state.photos)

    useEffect(()=>{
        dispatch(recharge())
        dispatch(getAllUsers())
        dispatch(getAllPhotos())
    },[])

    const n = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1]

    return(
        <div className="Fotos">
            <div className='Grid-container'>
                <header className='Header'>
                    <div className='ImageBack'></div>
                </header>
                <nav className='Navbar'>
                    <div className='Photo'>
                        <img src={photos.length?photos.find(photo => photo.id === user.id).url:null} alt='fotoperfil'></img>
                    </div>
                    <div className='Info'>
                        <div className='InfoBasic'>
                            <div className='InfoName'>
                                <h1>{user?user.name:null}</h1>
                                <h3>{user.name?user.company.catchPhrase:null}</h3>
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
                <div className='PictureContainerUser'>
                    <div className='TitlePictures'>
                        <div className='PictureProfile'>
                            <img src={photos.length?photos.find(photo => photo.id === user.id).url:null} alt='PictureInGallery'></img>
                        </div>
                        <div className='UserName'><h1>{user?user.name:null}</h1></div>
                        <button className='EditInfo'><i class="far fa-edit"></i></button>
                    </div>
                    <hr></hr>
                    <div className='Gallery'>
                        {n.map(e => {
                            return (<div className='Item'></div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}