//Components
import React, { useContext } from "react";
import Loading from "../components/Loading";
import useLoadingPage from "../hooks/useLoadingPage";
import { CartContext } from "../contexts/CartContext";
import Meta from "../components/Meta";

//Styles
import styles from "../styles/Layout.module.scss";
import decoratorStyles from "../styles/Decorator.module.scss";

export default function Order() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.count * item.product.price;
  }, 0);
  const loadingPage = useLoadingPage();
  return (
    <div className={styles.wrapper}>
      <Meta title="Order Now - Online Dummy Store" />
      {loadingPage ? (
        <Loading />
      ) : (
        <div className={decoratorStyles.orderConfirmation}>
          <h3>Your order details: </h3>
          <div className={decoratorStyles.orderConfirmationDetails}>
            {cart.map((item, index) => {
              return (
                <p key={index}>
                  <b>{item.count + " "}</b>
                  {` ${item.product.name} with a price of `}
                  <b>{`${(+item.product.price * +item.count).toFixed(2)} EGP`}</b>
                </p>
              );
            })}
            <p>
              {`Total price is `} <b>{`${totalPrice.toFixed(2)} EGP`}</b>
            </p>
          </div>

          <button className={decoratorStyles.cardButton + " " + decoratorStyles.cartFooterButton}>Confirm Order</button>
        </div>
      )}
    </div>
  );
}
