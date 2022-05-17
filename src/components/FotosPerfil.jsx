import '../scss/components/FotosPerfil.scss'
import Camera from '../images/camera.png'

export default function FotosPerfil(){
    return(
        <div className="FotosPerfil">
            <h1>Fotos</h1>
            <button className='EditPhoto'><i class="far fa-edit"></i></button>
            <div className="PhotoPerfilContainer">
                <div className='Test'></div>
                <div className='Test'></div>
                <div className='Test'></div>

                <div className='Test'></div>
                <div className='Test'></div>
                <div className='Test'></div>

                <div className='Test'></div>
                <div className='Test'></div>
                <div className='Test'></div>
            </div>
            <button className='AddPhoto'> Añadir fotos</button>
        </div>
    )
}