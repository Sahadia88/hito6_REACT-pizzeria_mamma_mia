import { createContext, useState } from "react";

// 1. Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// 2. Proveer el contexto: el Provider guarda el estado del carrito
//    y las funciones que lo modifican, y se las entrega a todos sus hijos.
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega una pizza al carrito. Si ya estaba, solo suma 1 a su cantidad.
  const agregarAlCarrito = (pizza) => {
    const existe = cart.some((item) => item.id === pizza.id);

    if (existe) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          img: pizza.img,
          count: 1,
        },
      ]);
    }
  };

  // Suma 1 a la cantidad de una pizza que ya está en el carrito.
  const aumentar = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Resta 1 a la cantidad; si llega a 0, la pizza se elimina del carrito.
  const disminuir = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // El total se calcula UNA sola vez aquí, así Navbar y Cart muestran
  // siempre el mismo valor.
  const total = cart.reduce(
    (acumulado, item) => acumulado + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, total, agregarAlCarrito, aumentar, disminuir }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
