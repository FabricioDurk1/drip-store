import Carousel from 'react-bootstrap/Carousel';
import './styles/gallery.css';

const Gallery = ({imagesList, width, height}) => {
    return ( 
        <>
        <div className="d-flex align-items-center banner-carousel">
            <div className="text-content">
                <p className='title-text'>Melhores ofertas personalizadas</p>
                <h1 className='promo-text'>Queima de estoque</h1>
                <p className='description-text'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className='see-offer'>Ver Ofertas</button>
            </div>
            <Carousel interval={null} fade>
                {imagesList.map((image, index)=>(
                    <Carousel.Item key={index}>
                        <div className="image-content">
                            <div className="ornament">
                                <img src="./images/ornament11.svg" alt="ornament" width="140px" height="140px"/>
                            </div>
                            <img src={image.src} alt={`Slide ${index}`} width={width} height={height}/>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        </> 
     );
}
 
export default Gallery;