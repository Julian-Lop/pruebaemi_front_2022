import '../scss/components/Publication.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addLike } from '../Redux/Action'
import { useState } from 'react'
import WriteComment from './WriteComment'
import Comments from './Comments'

export default function Publication({publication}){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const users = useSelector((state) => state.users)
    const photosProfile = useSelector((state) => state.photosProfile)
    const likes = useSelector((state) => state.likes)
    const com = useSelector((state) => state.comments)

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
                    <img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (publication.userId*100)).download_url:null} alt="imagencomentario"></img>
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
                <div><button onClick={(e) => activeOrInactiveComment(e)}><i className="far fa-comment"></i></button><p>{com.filter(c => c.idPost === publication.id).length}</p></div>
                <div><button onClick={(e) => submitLike(e)}><i className={active?"fas fa-heart":"far fa-heart"}></i></button><p>{countLikes}</p></div>
            </div>
           {activeComment ? 
            <div className='Comment'>
                <Comments publication={publication} comments={com}/>
                <WriteComment user={user} publication={publication}/>
                <br></br>
            </div> : null}
            <hr className='HrPublication'></hr>
        </div>
    )
}