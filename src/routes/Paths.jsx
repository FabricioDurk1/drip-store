import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import NotFound from "../pages/NotFound";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>} />
                        <Route path="/productDetails" element={<ProductViewPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;