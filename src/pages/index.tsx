import ProductCard from "../components/product_card";
import { productExample } from "../models/product";

const Index = () => {
  const product = productExample;
  return (
    <>
    <ProductCard product={product}></ProductCard>
    </>
  );
};

export default Index;
