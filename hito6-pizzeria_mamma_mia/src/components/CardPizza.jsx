import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { usarImagenRespaldo } from "../utils/imagenRespaldo";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img
        src={img}
        className="card-img-top"
        alt={`Pizza ${name}`}
        onError={(e) => usarImagenRespaldo(e, id)}
      />

      <div className="card-body">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
      </div>

      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item card-pizza-ingredients">
          <p className="text-muted mb-1">Ingredientes:</p>

          <ul className="list-unstyled mb-0 text-capitalize">
            {ingredients.map((ingrediente) => (
              <li key={ingrediente}> {ingrediente}</li>
            ))}
          </ul>
        </li>

        <li className="list-group-item">
          <h5 className="mb-0">Precio: ${price.toLocaleString("es-CL")}</h5>
        </li>
      </ul>

      <div className="card-body d-flex justify-content-between align-items-center flex-grow-0 mt-auto">
        <button className="btn btn-outline-dark btn-sm">Ver Más</button>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => agregarAlCarrito({ id, name, price, img })}
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
