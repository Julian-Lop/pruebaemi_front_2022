import Publication from './Publication'
import '../scss/components/PublicationSection.scss'

export default function PublicationSection({posts}){
    
    const publications = posts

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