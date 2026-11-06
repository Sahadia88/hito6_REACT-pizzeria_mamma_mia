import { pizzas } from "../pizzas";

// Imágenes locales indexadas por id en minúscula (p001, p002, ...).
// Se usan SOLO como respaldo cuando la imagen que entrega la API no carga.
const imagenesLocales = Object.fromEntries(
  pizzas.map((pizza) => [pizza.id.toLowerCase(), pizza.img])
);

// Se usa en el evento onError de un <img>
export const usarImagenRespaldo = (e, id) => {
  const respaldo = imagenesLocales[String(id).toLowerCase()];
  // Se desactiva onError para evitar un bucle si el respaldo también falla
  e.currentTarget.onerror = null;
  if (respaldo) {
    e.currentTarget.src = respaldo;
  }
};
