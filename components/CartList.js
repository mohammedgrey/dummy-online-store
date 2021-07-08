import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

export default function ProductList() {
  const { cart } = useContext(CartContext);
  return (
    <div style={{ padding: "20px" }}>
      {cart.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
    </div>
  );
}
