import '../scss/components/FriendSection.scss'

export default function FriendSection({modal,setmodal}){

    const changeModal = () => {
        setmodal(!modal)
    }

    return (
        <div className='FriendSection'>
            <h1>Amigos</h1>
            <div className="FriendContainer">
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
            </div>
            <button onClick={() => changeModal()} ><i class="far fa-id-badge"></i> Ver todos los contactos</button>
        </div>
    )
}