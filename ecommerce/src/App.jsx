// import './App.css';
import ProductCard from "./components/ProductCard";
import Section from "./components/Section";
import "primeflex/primeflex.css";

const App = () => {
  return ( 
    <Section
      title={"Produtos em alta"}
      link={"Ver todos"}
    >
      <div className="grid">
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold"><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
      </div>
      <div className="grid" style={{display:"flex", justifyContent:"center"}}>
        <div className="col">
            <div className="text-center align-items-center p-0 border-round font-bold"><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div className="col" style={{display:"flex", justifyContent:"center"}}>
            <div className="text-center align-items-center p-0 border-round font-bold "><ProductCard
              image={"./images/product.svg"}
              description={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
      </div>
    </Section>
   );
}
 
export default App;