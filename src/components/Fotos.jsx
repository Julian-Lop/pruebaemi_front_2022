import '../scss/components/Perfil.scss'
import '../scss/components/Fotos.scss'
import image from '../images/imageperfil.png'

export default function Fotos(){

    const n = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1]

    return(
        <div className="Fotos">
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
                                <h1>Nombre</h1>
                                <h3>Profesión</h3>
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
                            <img src={image} alt='PictureInGallery'></img>
                        </div>
                        <div className='UserName'><h1>Nombre</h1></div>
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