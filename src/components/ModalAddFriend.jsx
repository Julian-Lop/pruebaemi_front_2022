import '../scss/components/ModalAddFriend.scss'


export default function ModalAddFriend({modal,setmodal}){


    const changeModal = () => {
        setmodal(!modal)
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
                            <div className='Profile'></div>
                            <div className='Profile'></div>
                            <div className='Profile'></div>
                        </div>
                    </div>
                    <div className='Current'>
                        <div className='BoxProfiles'>
                            <div className='Profile'></div>
                            <div className='Profile'></div>
                            <div className='Profile'></div>

                            <div className='Profile'></div>
                            <div className='Profile'></div>
                            <div className='Profile'></div>

                            <div className='Profile'></div>
                            <div className='Profile'></div>
                            <div className='Profile'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}