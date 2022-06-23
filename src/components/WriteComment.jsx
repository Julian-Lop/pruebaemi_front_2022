import '../scss/components/WriteSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { sendComment } from '../Redux/Action'

export default function WriteComment({user,publication}){
    const dispatch = useDispatch()
    const photosProfile = useSelector((state) => state.photosProfile)
    

    const [comment, setcomment] = useState({
        idPost:publication?.id,
        userId:user?.id,
        title:'post '+user.name,
        body:null,
        id:Math.floor(Math.random(100) * 250)
    })

    const handleChange = (e) => {
        setcomment({
            ...comment,
            [e.target.name] : e.target.value
        })
        console.log(comment)
    }

    const handleSubmit = (e) => {
        dispatch(sendComment(comment))
        setcomment({
            ...comment,
            body: '',
            id:Math.floor(Math.random(100) * 250)
        })
    }

    return (
        <div className="WriteSection">
            <div className="PerfilComment">
                <img src={photosProfile.length?photosProfile.find(photo => Number(photo.id) === (user.id*100)).download_url:null} alt="imagencomentario"></img>
            </div>
            <div className="CommentSection">
                <label>{user.name}, comenta esta publicación.</label>
                <input type="text" name="body" onChange={(e) => handleChange(e)} value={comment.body}></input>
                <div className="Actions">
                    <div className='ButtonsActions'>
                        <button><i class="far fa-images"></i></button>
                        <div className='Gif'></div>
                        <button><i class="far fa-smile"></i></button>
                    </div>
                    <div>
                        <button className='Send' onClick={(e) => handleSubmit(e)}>Comentar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}