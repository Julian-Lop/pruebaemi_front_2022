import '../scss/components/Publication.scss'
import image from '../images/imageperfil.png'

export default function Publication(){
    return (
        <div className="Publication">
            <div className='Post'>
                <div className="PerfilPhoto">
                    <img src={image} alt="imagencomentario"></img>
                </div>
                <div className="PostInfo">
                    <div>
                        <h2>Nombre</h2>
                        <label>@nombre 2h</label>
                    </div>
                    <p>Texto de la publicación</p>
                </div>
            </div>
            <div className='ReactSection'>
                <div><button><i class="far fa-comment"></i></button><p>8</p></div>
                <div><button><i class="far fa-heart"></i></button><p>32</p></div>
            </div>
            <hr className='HrPublication'></hr>
        </div>
    )
}