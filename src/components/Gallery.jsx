import Carousel from 'react-bootstrap/Carousel';
import './styles/gallery.css';

const Gallery = ({imagesList, width, height}) => {
    return ( 
        <>
        <div className="banner-carousel">
            <div className="row m-0" >
                <div className="col-4 d-flex align-items-center text-start">
                    <div className="text-content">
                        <p className='title-text'>Melhores ofertas personalizadas</p>
                        <h1 className='promo-text'>Queima de<br/>stoque Nike🔥</h1>
                        <p className='description-text text-start'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button className='see-offer btn'>Ver Ofertas</button>
                    </div>
                </div>
                <div className="col-8 p-0">
                    <Carousel interval={null}>
                        {imagesList.map((image, index)=>(
                            <Carousel.Item key={index}>
                                <div className="image-content overflow-hidden">
                                    <div className="ornament">
                                        <img src="./images/ornament11.svg" alt="ornament" width="140px" height="140px"/>
                                    </div>
                                    <img src={image.src} alt={`Slide ${index}`} width={width} height={height}/>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
        </> 
     );
}
 
export default Gallery;