import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import '../scss/components/FotosPerfil.scss'

export default function FotosPerfil({user}){

    const photos = useSelector((state) => state.photos)
    let album = photos.slice(11,20)
    
    return(
        <div className="FotosPerfil">
            <h1>Fotos</h1>
            <Link to="/fotos"><button className='EditPhoto'><i class="far fa-edit"></i></button></Link>
            
            <div className="PhotoPerfilContainer">
                {album.length?album.slice(0,9).map(photo => {
                    return (
                        <div className='PictureItem' key={photo.id}>
                            <img src={photo.download_url} alt="fotoalbum"></img>
                        </div>
                    )
                }):null}
            </div>
            <button className='AddPhoto'> Añadir fotos</button>
        </div>
    )
}