import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSuggestion,addFriend, getAllPosts} from '../Redux/Action/index'
import '../scss/components/ModalAddFriend.scss'


export default function ModalAddFriend({modal,setmodal}){
    const dispatch = useDispatch()

    const friends = useSelector((state) => state.myFriends)
    const suggestions = useSelector((state) => state.suggestions)
    const photos = useSelector((state) => state.photos)

    useEffect(()=>{
        dispatch(getSuggestion())
    },[dispatch])

    const changeModal = () => {
        setmodal(!modal)
    }

    const submitFriend = (user) => {
        dispatch(addFriend(user))
        dispatch(getAllPosts())
        dispatch(getSuggestion())
    }

    return (
        <div className="ModalAddFriend">
            <div className='ContainerModal'>
                <div className='Title'>
                    <h2>Tus amigos</h2>
                    <button className='ExitButton' onClick={() => changeModal()}><i class="fas fa-times"></i></button>
                </div>
                <div className='ContainerFriends'>
                    <div className='Suggestion'>
                        <h2>Sugeridos</h2>
                        <div className='BoxProfiles'>
                            {suggestions.length?suggestions.map(user => {
                                return (
                                    <div>
                                        <div className='Profile' key={user.id}>
                                            <img src={photos.length?photos.find(photo => photo.id === user.id).url:null} alt=""></img>
                                        </div>
                                        <label>{user.name.split(' ')[0].concat(' '+user.name.split(' ')[1][0])}</label>
                                        <button onClick={() => submitFriend(user)}>Add</button>
                                    </div>
                                )
                            }):null}
                        </div>
                    </div>
                    <div className='Current'>
                        <div className='BoxProfiles'>
                            {friends.length?friends.map(user => {
                                return (
                                    <div>
                                        <div className='Profile' key={user.id}>
                                            <img src={photos.length?photos.find(photo => photo.id === user.id).url:null} alt=""></img>
                                        </div>
                                        <label>{user.name.split(' ')[0].concat(' '+user.name.split(' ')[1][0])}</label>
                                    </div>
                                )
                            }):null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}