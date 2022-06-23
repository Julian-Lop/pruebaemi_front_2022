import '../scss/components/WriteSection.scss'
import { getMyPosts, sendPost } from '../Redux/Action/index'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function WriteSection({user}){
    const dispatch = useDispatch()
    const photosProfile = useSelector((state) => state.photosProfile)
    

    const [post, setpost] = useState({
        userId:user?.id,
        title:'post '+user.name,
        body:null,
        id:Math.floor(Math.random(100) * 250)
    })

    const handleChange = (e) => {
        setpost({
            ...post,
            [e.target.name] : e.target.value
        })
        console.log(post)
    }

    const handleSubmit = (e) => {
        dispatch(sendPost(post))
        dispatch(getMyPosts())
        setpost({
            ...post,
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
                <label>Hola {user.name}, cuéntale a tus compañeros ¿Cómo va tu día laboral?</label>
                <input type="text" name="body" onChange={(e) => handleChange(e)} value={post.body}></input>
                <div className="Actions">
                    <div className='ButtonsActions'>
                        <button><i className="far fa-images"></i></button>
                        <div className='Gif'></div>
                        <button><i className="far fa-smile"></i></button>
                    </div>
                    <div>
                        <button className='Send' onClick={(e) => handleSubmit(e)}>Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}