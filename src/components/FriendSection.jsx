import { useSelector } from 'react-redux'
import '../scss/components/FriendSection.scss'

export default function FriendSection({modal,setmodal,friends}){

    const photos = useSelector((state) => state.photos)

    const changeModal = () => {
        setmodal(!modal)
    }

    return (
        <div className='FriendSection'>
            <h1>Amigos</h1>
            <div className="FriendContainer">
                {friends.length?
                friends.map(friend => {
                    return(<div>
                        <div className='ProfileFriend' key={friend.id}>
                            <img src={photos.length?photos.find(photo => photo.id === friend.id).url:null} alt='perfiluser'></img>
                        </div>
                        <label>{friend.name.split(' ')[0].concat(' '+friend.name.split(' ')[1][0])}</label>
                        </div>
                    )
                }):'No tienes amigos'
                }
            </div>
            <button onClick={() => changeModal()} ><i class="far fa-id-badge"></i> Ver todos los contactos</button>
        </div>
    )
}