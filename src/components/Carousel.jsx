import Slider from 'infinite-react-carousel'
import '../scss/components/Slider.scss'

export default function Carousel({photos,setslider,slider}){

    const setSlider = () => {
        setslider(!slider)
    }

    return(
        <section className='Slider'>
            <button onClick={() => setSlider()}><i class="fas fa-times"></i></button>
            <Slider className="SliderContent">
                {photos.length?photos.map(photo =>{
                    return(
                        <div className='SliderContentItem' key={photo.id} >
                            <img src={photo.url} alt={photo.id} id={photo.id}/>       
                        </div>
                    )
                }):null}
            </Slider>
        </section>  
    )
}