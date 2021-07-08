//Components
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { faCartPlus, faTags, faMoneyCheckAlt, faBoxOpen, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import decoratorStyles from "../styles/Decorator.module.scss";

export default function ProductDetails({ product }) {
  const { addToCart, cart, decrementItemCount, incrementItemCount } = useContext(CartContext);
  const indexOfProductInCart = cart.findIndex((e) => e.product.id === product.id);
  const showAddToCart = indexOfProductInCart === -1;
  const productInCart = cart[indexOfProductInCart];
  const canIncrementCount = !showAddToCart && productInCart.count < product.quantity;
  const disabledClass = !canIncrementCount ? " " + decoratorStyles.disabled : "";
  return (
    <div className={decoratorStyles.cardDetails}>
      <p className={decoratorStyles.cardTitle}>{product.name}</p>
      <div className={decoratorStyles.cardDetail}>
        <p className={decoratorStyles.cardLable}>
          <FontAwesomeIcon icon={faTags} />
          {" Category:"}
        </p>
        <p className={decoratorStyles.cardTag}> {product.category}</p>
      </div>
      <div className={decoratorStyles.cardDetail}>
        <p className={decoratorStyles.cardLable}>
          <FontAwesomeIcon icon={faMoneyCheckAlt} />
          {" Price:"}
        </p>
        <p className={decoratorStyles.cardTag}> {product.price} EGP </p>
      </div>
      <div className={decoratorStyles.cardDetail}>
        <p className={decoratorStyles.cardLable}>
          <FontAwesomeIcon icon={faBoxOpen} />
          {" Available:"}
        </p>
        <p className={decoratorStyles.cardTag}> {product.quantity} </p>
      </div>
      {showAddToCart ? (
        <button onClick={() => addToCart(product)} className={decoratorStyles.cardButton}>
          <FontAwesomeIcon icon={faCartPlus} /> {"Add To Cart"}
        </button>
      ) : (
        <div className={decoratorStyles.cardButtonMinusPlus}>
          <span onClick={() => decrementItemCount(product)} className={decoratorStyles.CartEdit + " " + decoratorStyles.insideMinusPlus}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className={decoratorStyles.CartInfo + " " + decoratorStyles.insideMinusPlus + " " + decoratorStyles.middleMinusPlus}>{productInCart.count} </span>

          <span onClick={() => (canIncrementCount ? incrementItemCount(product) : null)} className={decoratorStyles.CartEdit + " " + decoratorStyles.insideMinusPlus + disabledClass}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      )}
    </div>
  );
}
