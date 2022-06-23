import Slider from 'infinite-react-carousel'
import '../scss/components/Slider.scss'

export default function Carousel({photos,setslider,slider,initialSlide}){

    const setSlider = () => {
        setslider(!slider)
    }

    return(
        <section className='Slider'>
            <button onClick={() => setSlider()} className="exitButton"><i class="fas fa-times"></i></button>
            <Slider className="SliderContent" initialSlide={initialSlide}>
                {photos.length?photos.map(photo =>{
                    return(
                        <div className='SliderContentItem' key={photo.id} id={photo.id} >
                            <img src={photo.download_url} alt={photo.id} id={photo.id}/>       
                        </div>
                    )
                }):null}
            </Slider>
        </section>  
    )
}