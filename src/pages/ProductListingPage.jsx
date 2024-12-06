import ProductList from '../components/ProductList';
import FilterGroup from '../components/FilterGroup'; // Importe o componente
import productData from '../assets/productlist.json';
import productMarcas from '../assets/productMarcas.json';
import productCategoria from '../assets/productCategoria.json';
import generoData from '../assets/generoData.json';
import estadoData from '../assets/estadoData.json';

const ProductListingPage = () => {
    const filters = [
        {
            title: "Marca",
            inputType: "checkbox",
            options: productMarcas,
        },
        {
            title: "Categoria",
            inputType: "checkbox",
            options: productCategoria,
        },
        {
            title: "Gênero",
            inputType: "checkbox",
            options: generoData,
        },
        {
            title: "Estado",
            inputType: "radio",
            options: estadoData,
        },
    ];

    return ( 
        <>
            <div className="d-flex">
                <div className="row m-0">
                    <div className="col-3">
                        <h2>Filtrar por</h2>
                        <hr />
                        {filters.map((filter, index) =>
                            <FilterGroup
                                key={index}
                                title={filter.title}
                                inputType={filter.inputType}
                                options={filter.options}
                            />
                        )}
                    </div>

                    <div className="col">
                        <ProductList products={productData} />    
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductListingPage;
