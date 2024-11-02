import ProductList from '../components/ProductList';
import FilterGroup from '../components/FilterGroup'; // Importe o componente
import productData from "../assets/productlist.json";

const ProductListingPage = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2>Filtrar por</h2>
                        <hr />

                        {/* Filtros */}
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[
                                { text: "Adidas" },
                                { text: "Calenciaga" },
                                { text: "K-Swiss" },
                                { text: "Nike" },
                                { text: "Puma" }
                            ]}
                        />

                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={[
                                { text: "Esporte e lazer" },
                                { text: "Casual" },
                                { text: "Utilitário" },
                                { text: "Corrida" }
                            ]}
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

                    <div className="col-9">
                        <ProductList products={productData} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductListingPage;
