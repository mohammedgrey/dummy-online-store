//Components
import React from "react";
import CartList from "../components/CartList";
import useLoadingPage from "../hooks/useLoadingPage";
import Loading from "../components/Loading";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";

//Styles
import styles from "../styles/Layout.module.scss";
const CartFooter = dynamic(() => import("../components/CartFooter"), { ssr: false }); //for the sake of the styles

export default function Cart() {
  const loadingPage = useLoadingPage();
  return (
    <div className={styles.wrapper}>
      <Meta title="Cart - Online Dummy Store" />
      {loadingPage ? (
        <Loading />
      ) : (
        <div>
          <CartList />
          <CartFooter />
        </div>
      )}
    </div>
  );
}
