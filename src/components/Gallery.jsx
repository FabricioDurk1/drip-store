import Carousel from 'react-bootstrap/Carousel';
import styles from './styles/gallery.module.css';
import styled from 'styled-components';


const CustomCarousel = styled.div `
    .carousel-indicators button {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50%;
    background-color: var(--dark-gray-3) !important;
    }

    .carousel-inner{
    background-color: var(--light-gray-3) !important;
    }

    .carousel-indicators .active {
    background-color: var(--primary) !important;
    }
`;

const Gallery = ({imagesList, width, height}) => {
    return ( 
        <>
        <div className={styles.bannerCarousel}>
            <div className="row m-0" >
                <div className="col-4 d-flex align-items-center text-start">
                    <div className={styles.textContent}>
                        <h1 className={styles.titleText}>Melhores ofertas personalizadas</h1>
                        <h2 className={styles.promoText}>Queima de<br/>stoque Nike🔥</h2>
                        <p className={`${styles.descriptionText} text-start`}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button className={`${styles.seeOffer} btn`}>Ver Ofertas</button>
                    </div>
                </div>
                <div className="col-8 p-0">
                    <CustomCarousel>
                        <Carousel interval={null}>
                            {imagesList.map((image, index)=>(
                                <Carousel.Item key={index}>
                                    <div className={`${styles.imageContent} overflow-hidden`}>
                                        <div className={styles.ornament}>
                                            <img src="./images/ornament11.svg" alt="ornament" width="140px" height="140px"/>
                                        </div>
                                        <img src={image.src} alt={`Slide ${index}`} width={width} height={height}/>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </CustomCarousel>
                </div>
            </div>
        </div>
        </> 
     );
}
 
export default Gallery;