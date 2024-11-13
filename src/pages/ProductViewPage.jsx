import Gallery from "../components/Gallery";
import imagesData from '../assets/imageslist.json';

const ProductViewPage = () => {
    return ( 
        <>
            <div className="d-flex">
                <div className="col">
                    <Gallery
                        width={1440}
                        height={681}
                        imagesList={imagesData}
                    />
                </div>
                <div className="col">
                    <h1>BuyBox aqui</h1>
                </div>
            </div>
        </>
     );
}
 
export default ProductViewPage;