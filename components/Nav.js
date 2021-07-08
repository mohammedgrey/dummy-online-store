//Components
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartContext } from "../contexts/CartContext";
import { faShoppingCart, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import styles from "../styles/Nav.module.scss";

//images
import logo from "../public/logo.png";

const routes = [
  {
    path: "/",
    title: "Store",
    icon: faStore,
  },
  {
    path: "/cart",
    title: "Cart",
    icon: faShoppingCart,
  },
];

export default function Nav() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  let cartCount = 0;
  if (typeof window !== "undefined") {
    cartCount = cart.reduce((sum, item) => {
      return sum + item.count;
    }, 0);
  }

  return (
    <div className={styles.navContainer}>
      <h1 className={styles.navCompanyTitle}>Dummy Online Store</h1>
      <div className={styles.nav}>
        <div className={styles.navLinks}>
          <div className={styles.navLogo}>
            <Image alt="broken" src={logo} width="90" height="90" />
          </div>
          <h1 className={styles.navTitle}>Dummmy Online Store</h1>
        </div>
        <div className={styles.navLinks}>
          {routes.map((route) => {
            const activeLinkClass = router.pathname === route.path ? "activeNavLink" : "";
            return (
              <Link key={route.path} href={route.path}>
                <a className={styles.navLink + " " + styles[activeLinkClass]}>
                  {route.title} <FontAwesomeIcon icon={route.icon} />
                  {route.path === "/cart" && (
                    <p suppressHydrationWarning className={styles.navCartCount}>
                      {cartCount}
                    </p>
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
