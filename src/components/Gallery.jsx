import Carousel from 'react-bootstrap/Carousel';
import './styles/gallery.css';

const Gallery = ({imagesList, width, height}) => {
    return ( 
        <>
        <Carousel interval={null}>
            {imagesList.map((image, index)=>(
                // <Carousel.Item  key={index}>
                //      <div className="banner-carousel">
                //         <p>Melhores ofertas personalizadas</p>
                //         <h1>Queima de estoque</h1>
                //     </div>
                //     <img src={image.src} width={width} height={height} alt={`Slide ${index}`} />
                // </Carousel.Item>
                <Carousel.Item key={index}>
                    <div className="d-flex align-items-center banner-carousel">
                        <div className="text-content">
                            <p>Melhores ofertas personalizadas</p>
                            <h1>Queima de estoque</h1>
                        </div>
                        <div className="image-content">
                            <img src={image.src} alt={`Slide ${index}`} width={width} height={height}/>
                        </div>
                    </div>
                </Carousel.Item>
                
            ))}
        </Carousel>
        </> 
     );
}
 
export default Gallery;