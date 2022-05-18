import '../scss/components/Publication.scss'
import { useSelector } from 'react-redux'

export default function Publication({publication}){

    const users = useSelector((state) => state.users)
    const photos = useSelector((state) => state.photos)

    return (
        <div className="Publication">
            <div className='Post'>
                <div className="PerfilPhoto">
                    <img src={photos.length?photos.find(photo => photo.id === publication.userId).url:null} alt="imagencomentario"></img>
                </div>
                <div className="PostInfo">
                    <div>
                        <h2>{users.length?users.find(user => user.id === publication.userId).name:null}</h2>
                        <label>{users.length?users.find(user => user.id === publication.userId).email:null}</label>
                    </div>
                    <p>{publication?publication.body:null}</p>
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