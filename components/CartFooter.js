//Components
import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMoneyCheckAlt, faStore, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

//Styles
import layoutStyles from "../styles/Layout.module.scss";
import styles from "../styles/Decorator.module.scss";

export default function CartFooter() {
  const { cart } = useContext(CartContext);
  const cartIsEmpty = !cart || cart.length === 0;
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.count * item.product.price;
  }, 0);
  return (
    <div>
      {cartIsEmpty ? (
        <div className={layoutStyles.center} style={{ paddingLeft: "20px", borderLeft: "4px solid #1d4962" }}>
          <p className={styles.cartFooterPrice} styles={{ fontSize: "500px", width: "100%" }}>
            You currently have an empty cart.
          </p>
          <Link href="/">
            <a>
              <button className={styles.cardButton + " " + styles.cartFooterButton}>
                <FontAwesomeIcon icon={faStore} />
                {" Shop Now"}
              </button>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles.cardFooter} style={{ padding: "0px 20px" }}>
          <p className={styles.cartFooterPrice}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
            {" Total:"}
            <b>{` ${totalPrice.toFixed(2)} EGP`}</b>
          </p>
          <Link href="/order">
            <a>
              <button className={styles.cartFooterButton + " " + styles.cardButton}>
                {" "}
                <FontAwesomeIcon icon={faCartArrowDown} />
                {" Order Now "}
              </button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
