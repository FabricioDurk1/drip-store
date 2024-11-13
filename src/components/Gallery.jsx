import Carousel from 'react-bootstrap/Carousel';
import styles from './styles/gallery.module.css';
import styled from 'styled-components';


const CustomCarousel = styled.div `
    .carousel-indicators button {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50%;
    background-color: var(--light-gray-3) !important;
    }

    // .carousel-indicators{
    //     justify-content: start;
    // }

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
        <div className={`${styles.containerCarousel}d-flex p-0`}>
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
        </> 
     );
}
 
export default Gallery;