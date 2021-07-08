//Components
import { getAllProducts } from "../requests/products";
import ProductList from "../components/ProductList";
import useLoadingPage from "../hooks/useLoadingPage";
import Loading from "../components/Loading";
import Meta from "../components/Meta";

//Styles
import styles from "../styles/Layout.module.scss";

export default function Home({ products }) {
  const loadingPage = useLoadingPage();
  return (
    <div className={styles.wrapper}>
      <Meta title="Online Dummy Store - Shop" />
      {loadingPage ? <Loading /> : <ProductList products={products} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};
