import { products } from "../../../data/products";

//api/products/[id]
export default function handler({ query: { id } }, res) {
  const product = products.find((item) => +item.id === +id);
  if (!product) return res.status(404).json({ message: `No product found with id: ${id}` });
  return res.status(200).json(product);
}
