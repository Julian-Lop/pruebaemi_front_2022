import Publication from './Publication'
import '../scss/components/PublicationSection.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMyPosts } from '../Redux/Action'
import { useSelector } from 'react-redux'


export default function PublicationSection({posts}){
    const dispatch = useDispatch()

    const publications = useSelector((state) => state.myPosts)
    const friends = useSelector((state) => state.myFriends)

    useEffect(()=>{
        if(friends.length){
            dispatch(getMyPosts())
        }
    },[friends])

    return (
        <div className="PublicationSection">
            <hr className='Division'></hr>
            <div className='PublicationContainer'>
                {publications.length?publications.map((publication) => {
                    return (
                        <Publication publication={publication} key={publication.id}/>
                    )
                }):null}
            </div>
            <hr className='Division'></hr>
        </div>
    )
}