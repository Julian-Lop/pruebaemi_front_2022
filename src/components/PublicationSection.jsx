import Publication from './Publication'
import '../scss/components/PublicationSection.scss'

export default function PublicationSection({posts}){
    
    const publications = []
    let count = 1
    if(posts.length){
        while(count < 10){
            let post = posts.find(post => post.userId === count)
            publications.push(post)
            count++
        }
    }

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