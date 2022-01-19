export default interface Product {
  id: string;
  image: string;
  productName: string;
  price: number;
  stockItems: number;
  totalItems: number;
}

export const productExample: Product = {
  id: "1",
  productName: "Aceite",
  stockItems: 3,
  totalItems: 10,
  price: 12.8,
  image: "/img-1.png",
};
