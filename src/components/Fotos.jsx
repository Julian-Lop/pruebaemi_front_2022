import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { recharge,getAllUsers,getAllPhotos } from '../Redux/Action'
import '../scss/components/Perfil.scss'
import '../scss/components/Fotos.scss'
import flechaizq from '../images/flechaizq.png'
import flechader from '../images/flechader.png'
import Carousel from './Carousel'

export default function Fotos(){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const photos = useSelector((state) => state.photos)
    const friends = useSelector((state) => state.myFriends)

    const [currentpage, setcurrentpage] = useState(0)
    const [slider, setslider] = useState(false)

    useEffect(()=>{
        dispatch(recharge())
    },[])

    const photosPage = ()=>{
        return photos.slice(currentpage,currentpage+18)
    }

    const nextPage = () => {
        if(currentpage < photos.length-18){
            setcurrentpage(currentpage + 18)
        }
    }

    const prevPage = () => {
        if(currentpage > 0){
            setcurrentpage(currentpage - 18)
        }
    }

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
                                    <input type="number" className='InputNum' value={friends.length?friends.length:0} readOnly></input>
                                    <input type="text" className='InputText' value="Siguiendo" readOnly></input>
                                </div>
                                <div>
                                    <input type="number" className='InputNum' value={friends.length?friends.length:0} readOnly></input>
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
                    {slider?<Carousel photos={photosPage()} setslider={setslider} slider={slider}/>:null}
                    <div className='Gallery'>
                        {photosPage().map(photo => {
                            return (
                            <div className='Item'>
                                <img src={photo.url} alt='imagenalbum' onClick={() => setslider(!slider)} />
                            </div>)
                        })}
                    </div>
                    <div className='ButtonPage'>
                        <button className='ButtonSelect' onClick={() => prevPage()}><img src={flechaizq}></img></button>
                        <button className='ButtonSelect' onClick={() => nextPage()}><img src={flechader}></img></button>            
                    </div>
                </div>
            </div>
        </div>
    )
}