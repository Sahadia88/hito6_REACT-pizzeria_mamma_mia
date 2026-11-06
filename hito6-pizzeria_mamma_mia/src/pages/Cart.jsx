import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/formatNumber";
import { usarImagenRespaldo } from "../utils/imagenRespaldo";

const Cart = () => {
  const { cart, total, aumentar, disminuir } = useContext(CartContext);

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h4 className="mb-4">Detalles del pedido:</h4>

          {cart.length === 0 && (
            <p className="text-muted">Tu carrito está vacío.</p>
          )}

          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between mb-3"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={`Pizza ${pizza.name}`}
                  className="cart-img rounded"
                  onError={(e) => usarImagenRespaldo(e, pizza.id)}
                />
                <span className="text-capitalize">{pizza.name}</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <span className="fw-semibold">
                  ${formatNumber(pizza.price)}
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => disminuir(pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold">{pizza.count}</span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => aumentar(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h3 className="mt-4">Total: ${formatNumber(total)}</h3>

          <button className="btn btn-dark mt-2">Pagar</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
