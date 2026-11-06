import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container my-5 text-center">
      <div className="not-found-emoji">🍕</div>
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="h4 mb-3">¡Ups! Esta pizza no está en el menú</h2>
      <p className="text-muted mb-4">
        La página que buscas no existe o se la comió alguien antes de que
        llegáramos. Vuelve al inicio y elige otra de nuestras pizzas.
      </p>
      <Link to="/" className="btn btn-dark btn-lg">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
