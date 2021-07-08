//Global Styles
import "../styles/globals.scss";
//Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
//Navbar
import Nav from "../components/Nav";
//Cart Context
import { CartProvider } from "../contexts/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Nav />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
