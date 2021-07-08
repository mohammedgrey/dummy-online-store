//Components
import React from "react";
import ProductItem from "./ProductItem";

//Styles
import styles from "../styles/Layout.module.scss";

export default function ProductList({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
