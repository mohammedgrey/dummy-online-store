//Components
import { getProduct } from "../../../requests/products";
import Image from "next/image";
import ProductDetails from "../../../components/ProductDetails";
import useLoadingPage from "../../../hooks/useLoadingPage";
import Loading from "../../../components/Loading";
import Meta from "../../../components/Meta";

//Styles
import layoutStyles from "../../../styles/Layout.module.scss";
import decoratorStyles from "../../../styles/Decorator.module.scss";

const Product = ({ product }) => {
  const loadingPage = useLoadingPage();
  return (
    <div className={layoutStyles.wrapper}>
      <Meta title={product.name} />
      {loadingPage ? (
        <Loading />
      ) : (
        <div className={layoutStyles.detailsLayout}>
          <div className={decoratorStyles.detailsImage}>
            <Image layout="responsive" alt="Not Found" src={product.picture} width="100%" height="100%" />
          </div>
          <ProductDetails product={product} />
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const product = await getProduct(context.params.id);
  return {
    props: {
      product,
    },
  };
};

export default Product;
