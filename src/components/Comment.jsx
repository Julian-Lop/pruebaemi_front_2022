import '../scss/components/Comment.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addLike } from '../Redux/Action'

export default function Comment({comment}){
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const users = useSelector((state) => state.users)
    const photosProfile = useSelector((state) => state.photosProfile)
    const likes = useSelector((state) => state.likes)

    let countLikes = likes.length? likes.filter(like => like.idPost === comment.id).length : 0
    let active = likes.find(like => {
        if(like.idPost === comment.id && like.userIdPost === comment.userId && like.userIdLike === user.id){
            return true
        }
        return false
    })

    const submitLike = (e) => {
        e.preventDefault()
        dispatch(addLike({
            id:Math.floor(Math.random(100) * 250),
            idPost:comment.id,
            userIdPost:comment.userId,
            userIdLike: null
        }))
    }


    return (
        <div className="Comment">
            <div className='Post'>
                <div className="PerfilPhoto">
                    <img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (comment.userId*100)).download_url:null} alt="imagencomentario"></img>
                </div>
                <div className="PostInfo">
                    <div>
                        <h2>{users.length?users.find(user => user.id === comment.userId).name:null}</h2>
                        <label>{users.length?users.find(user => user.id === comment.userId).email:null}</label>
                    </div>
                    <p>{comment?comment.body:null}</p>
                </div>
            </div>
            <div className='ReactSection'>
                <div><button onClick={(e) => submitLike(e)}><i className={active?"fas fa-heart":"far fa-heart"}></i></button><p>{countLikes}</p></div>
            </div>
            <hr className='HrPublication'></hr>
        </div>
    )
}