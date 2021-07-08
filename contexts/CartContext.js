import { createContext } from "react";
import usePersistentState from "../hooks/usePersistentState";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = usePersistentState("cart", []);

  const addToCart = (product) => {
    setCart([
      ...cart,
      {
        count: 1,
        product: { ...product },
      },
    ]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
  };

  const incrementItemCount = (product) => {
    const indexToChange = cart.findIndex((item) => item.product.id === product.id);
    const newCart = [...cart];
    newCart[indexToChange].count++;
    setCart(newCart);
  };

  const decrementItemCount = (product) => {
    const indexToChange = cart.findIndex((item) => item.product.id === product.id);
    const newCart = [...cart];
    const newCount = --newCart[indexToChange].count;
    if (newCount > 0) return setCart(newCart);
    //If the count becomes zero it should be removed from the cart
    removeFromCart(product);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        incrementItemCount,
        decrementItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
