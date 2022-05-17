import '../scss/components/FriendSection.scss'

export default function FriendSection(){
    return (
        <div className='FriendSection'>
            <h1>Amigos</h1>
            <div className="FriendContainer">
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
                <div className='ProfileFriend'></div>
            </div>
            <button><i class="far fa-id-badge"></i> Ver todos los contactos</button>
        </div>
    )
}