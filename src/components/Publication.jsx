import '../scss/components/Publication.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addLike } from '../Redux/Action'
import { useState } from 'react'
import WriteSection from './WriteSection'

export default function Publication({publication}){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const users = useSelector((state) => state.users)
    const photos = useSelector((state) => state.photos)
    const likes = useSelector((state) => state.likes)

    let countLikes = likes.length? likes.filter(like => like.idPost === publication.id).length : 0
    let active = likes.find(like => {
        if(like.idPost === publication.id && like.userIdPost === publication.userId && like.userIdLike === user.id){
            return true
        }
        return false
    })

    const [activeComment, setactiveComment] = useState(false)

    const submitLike = (e) => {
        e.preventDefault()
        dispatch(addLike({
            id:Math.floor(Math.random(100) * 250),
            idPost:publication.id,
            userIdPost:publication.userId,
            userIdLike: null
        }))
    }

    const activeOrInactiveComment = () => {
        setactiveComment(!activeComment)
    }

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
                <div><button onClick={(e) => activeOrInactiveComment(e)}><i className="far fa-comment"></i></button><p>{0}</p></div>
                <div><button onClick={(e) => submitLike(e)}><i className={active?"fas fa-heart":"far fa-heart"}></i></button><p>{countLikes}</p></div>
            </div>
           {activeComment ? 
            <div className='Comment'>
                <WriteSection user={user}/>
                <br></br>
            </div> : null}
            <hr className='HrPublication'></hr>
        </div>
    )
}