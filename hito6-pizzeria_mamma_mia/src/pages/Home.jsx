import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de las pizzas");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError("No pudimos cargar las pizzas. ¿Está levantado el backend?");
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    consultarApi();
  }, []);

  return (
    <>
      <Header />

      <main className="container my-4">
        {cargando && <p className="text-center text-muted">Cargando pizzas...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
