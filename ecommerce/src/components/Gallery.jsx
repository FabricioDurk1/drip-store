import './styles/gallery.css';

const Gallery = ({imagesList}) => {
    return ( 
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="carousel-dot active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="carousel-dot" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="carousel-dot" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {imagesList.map((image) =>(
                        <div className={`carousel-item ${image.id == 1 ? 'carousel-item active' : '' }`} key={image.id}>
                            <div className="banner-carousel">
                                <p>Melhores ofertas personalizadas</p>
                                <h1>Queima de estoque</h1>
                            </div>
                            <img src={image.src} className="d-block" width="auto" height="320px" alt="..."/>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
     );
}
 
export default Gallery;