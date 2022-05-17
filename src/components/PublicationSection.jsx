import Publication from './Publication'
import '../scss/components/PublicationSection.scss'

export default function PublicationSection(){
    return (
        <div className="PublicationSection">
            <hr></hr>
            <div className='PublicationContainer'>
                <Publication/>
            </div>
            <hr></hr>
        </div>
    )
}