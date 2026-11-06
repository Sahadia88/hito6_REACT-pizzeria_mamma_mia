import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/formatNumber";
import { usarImagenRespaldo } from "../utils/imagenRespaldo";

const Pizza = () => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!response.ok) {
          throw new Error("No se pudo obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError("No pudimos cargar la pizza. ¿Está levantado el backend?");
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    consultarApi();
  }, []);

  if (cargando) {
    return <p className="text-center text-muted my-5">Cargando pizza...</p>;
  }

  if (error || !pizza) {
    return <p className="text-center text-danger my-5">{error}</p>;
  }

  return (
    <main className="container my-5">
      <div className="card mb-3 shadow-sm">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start w-100 h-100 object-fit-cover"
              alt={`Pizza ${pizza.name}`}
              onError={(e) => usarImagenRespaldo(e, pizza.id)}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-capitalize">Pizza {pizza.name}</h3>
              <p className="card-text">{pizza.desc}</p>

              <p className="mb-1 fw-semibold">Ingredientes:</p>
              <ul className="text-capitalize">
                {pizza.ingredients.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">Precio: ${formatNumber(pizza.price)}</h4>
                
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    agregarAlCarrito({
                      id: pizza.id,
                      name: pizza.name,
                      price: pizza.price,
                      img: pizza.img,
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
