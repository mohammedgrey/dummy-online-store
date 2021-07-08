//Components
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faBoxOpen, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import styles from "../styles/Decorator.module.scss";

export default function ProductItem({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <a>
        <div className={styles.card}>
          <Image className={styles.cardImage} layout="responsive" alt="Not Found" src={product.picture} width="100%" height="100px" />
          <h3 className={styles.cardTitle + " " + styles.cardText}>{product.name}</h3>
          <h3 className={styles.cardSubTitle + " " + styles.cardText}>{product.category}</h3>
          <div className={styles.cardFooter}>
            <div>
              <FontAwesomeIcon icon={faBoxOpen} />
              {` ${product.quantity} AVL`}
            </div>
            <div>
              <FontAwesomeIcon icon={faMoneyBill} /> {` ${product.price} EGP`}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
