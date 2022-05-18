import {Link} from 'react-router-dom'
import '../scss/components/FotosPerfil.scss'

export default function FotosPerfil(){


    return(
        <div className="FotosPerfil">
            <h1>Fotos</h1>
            <Link to="/fotos"><button className='EditPhoto'><i class="far fa-edit"></i></button></Link>
            
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