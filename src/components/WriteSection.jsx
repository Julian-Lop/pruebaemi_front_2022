import '../scss/components/WriteSection.scss'
import image from '../images/imageperfil.png'

export default function WriteSection(){
    return (
        <div className="WriteSection">
            <div className="PerfilComment">
                <img src={image} alt="imagencomentario"></img>
            </div>
            <div className="CommentSection">
                <label>Hola, cuentale a tus compañeros ¿Cómo va tu día laboral?</label>
                <input type="text"></input>
                <div className="Actions">
                    <div className='ButtonsActions'>
                        <button><i class="far fa-images"></i></button>
                        <div className='Gif'></div>
                        <button><i class="far fa-smile"></i></button>
                    </div>
                    <div>
                        <button className='Send'>Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}