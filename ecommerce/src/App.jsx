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
      <div class="grid">
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold"><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
      </div>
      <div class="grid">
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold"><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
        <div class="col">
            <div class="text-center p-3 border-round-sm font-bold "><ProductCard
              image={"./images/product.svg"}
              name={"Tênis"}
              price={"$200"}
              priceDiscount={"$100"}
            /></div>
        </div>
      </div>
    </Section>
   );
}
 
export default App;