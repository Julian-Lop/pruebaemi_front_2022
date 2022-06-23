import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { recharge } from '../Redux/Action'
import '../scss/components/Perfil.scss'
import '../scss/components/Fotos.scss'
import flechaizq from '../images/flechaizq.png'
import flechader from '../images/flechader.png'
import Carousel from './Carousel'

export default function Fotos(){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const photos = useSelector((state) => state.photos)
    const photosProfile = useSelector((state) => state.photosProfile)
    const friends = useSelector((state) => state.myFriends)

    const [currentpage, setcurrentpage] = useState(0)
    const [slider, setslider] = useState(false)
    const [indexImage, setindexImage] = useState(0)
    const [positionPage, setpositionPage] = useState(0)

    let divisor = 18
    let newPhotos = []

    for(let i=0; i < photos.length; i){
        let temp = photos.slice(i,divisor+i)
        newPhotos.push(temp)
        i=i+divisor
    }

    useEffect(()=>{
        dispatch(recharge())
    },[])

    const photosPage = ()=>{
        return photos.slice(currentpage,currentpage+18)
    }

    const nextPage = () => {
        if(currentpage < photos.length-18){
            setcurrentpage(currentpage + 18)
            let i = positionPage+1
            setpositionPage(i)
        }
    }

    const prevPage = () => {
        if(currentpage > 0){
            setcurrentpage(currentpage - 18)
            let i = positionPage-1
            setpositionPage(i)
        }
    }

    const positionClick = (index) => {
        setcurrentpage(index*divisor)
        setpositionPage(index)
    }

    const handleImage = (index) => {
        setindexImage(index)
        setslider(!slider)
    }

    return(
        <div className="Fotos">
            
            <div className='Grid-container'>
                <header className='Header'>
                    <div className='ImageBack'></div>
                </header>
                <nav className='Navbar'>
                    <div className='Photo'>
                        <img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (user.id*100)).download_url:null} alt='fotoperfil'></img>
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
                            <img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (user.id*100)).download_url:null} alt='PictureInGallery'></img>
                        </div>
                        <div className='UserName'><h1>{user?user.name:null}</h1></div>
                        <button className='EditInfo'><i class="far fa-edit"></i></button>
                    </div>
                    <hr></hr>
                    {slider?<Carousel photos={photosPage()} setslider={setslider} slider={slider} initialSlide={indexImage}/>:null}
                    <div className='Gallery'>
                        {photosPage().map((photo,index) => {
                            return (
                            <div className='Item' key={photo.id}>
                                <img src={photo.download_url} alt='imagenalbum' onClick={() => handleImage(index)} />
                            </div>)
                        })}
                    </div>
                    <div className='ButtonPage'>
                        <button className='ButtonSelect' onClick={() => prevPage()}><img src={flechaizq} alt="flechaIzquierda"></img></button>
                        {newPhotos.length && photosPage().length?newPhotos.map((arrayPhoto,index) => 
                        (
                            <button key={index} onClick={() => positionClick(index)} className='ButtonSelect' disabled={positionPage === index?true:false}>{index+1}</button>  
                        ))
                        :null}
                        <button className='ButtonSelect' onClick={() => nextPage()}><img src={flechader} alt="flechaDerecha"></img></button>            
                    </div>
                </div>
            </div>
        </div>
    )
}