import ProductList from '../components/ProductList';
import FilterGroup from '../components/FilterGroup'; // Importe o componente
import productData from "../assets/productlist.json";
import productMarcas from '../assets/productMarcas.json';
import productCategoria from '../assets/productCategoria.json';

const ProductListingPage = () => {
    return ( 
        <>
            <div className="d-flex">
                <div className="row m-0">
                    <div className="col-3">
                        <h2>Filtrar por</h2>
                        <hr />

                        {/* Filtros */}
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={productMarcas}
                        />

                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={productCategoria}
                        />

                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={[
                                { text: "Masculino" },
                                { text: "Feminino" },
                                { text: "Unissex" }
                            ]}
                        />

                        <FilterGroup
                            title="Estado"
                            inputType="radio"
                            options={[
                                { text: "Novo" },
                                { text: "Usado" }
                            ]}
                        />
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
