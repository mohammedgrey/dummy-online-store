//Components
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { faMinus, faMoneyBill, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../contexts/CartContext";

//Styles
import styles from "../styles/Decorator.module.scss";
import animationStyles from "../styles/Animator.module.scss";

export default function CartItem({ item }) {
  const { removeFromCart, incrementItemCount, decrementItemCount } = useContext(CartContext);
  const canIncrementCount = item.count < item.product.quantity;
  const disabledClass = !canIncrementCount ? " " + styles.disabled : "";
  return (
    <div className={styles.wideCard}>
      <Link href={`/product/${item.product.id}`}>
        <a>
          <div>
            <h3 className={styles.cartTitle}>{item.product.name}</h3>
            <div className={styles.cartImageContainer}>
              <div className={styles.cartImage}>
                <Image className={styles.image} layout="responsive" alt="Not Found" src={item?.product?.picture} width="100%" height="100%" />
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          <span onClick={() => decrementItemCount(item.product)} className={styles.CartEdit}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className={styles.CartInfo}>{" QUANTITY "} </span>

          <span onClick={() => (canIncrementCount ? incrementItemCount(item.product) : null)} className={styles.CartEdit + disabledClass}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </p>
        <p style={{ margin: "0px auto" }}>{item.count}</p>
      </div>
      <div>
        <p className={styles.CartInfo}>
          <FontAwesomeIcon icon={faMoneyBill} />
          {" PRICE "}
        </p>
        <p>{`${(+item.product.price * +item.count).toFixed(2)} EGP`}</p>
      </div>
      <div style={{ margin: "auto 0px" }}>
        <button onClick={() => removeFromCart(item.product)} className={styles.cartRemoveButton + " " + animationStyles.animateTrashIcon}>
          <FontAwesomeIcon className={animationStyles.trashIcon} icon={faTrash} />
          {" Remove"}
        </button>
      </div>
    </div>
  );
}
