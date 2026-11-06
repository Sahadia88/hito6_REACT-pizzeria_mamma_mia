# Pizzería Mamma Mía – Hito 6 (Frontend + Backend)

Sexta etapa del proyecto **Pizzería Mamma Mía**, desarrollado con **React**. En este hito se implementa el **manejo de estado global con Context API**: el carrito de compras deja de vivir dentro de la página `Cart` y pasa a un **contexto** (`CartContext`) que comparten el `Navbar`, `Home` (tarjetas), `Pizza` y `Cart`.

Este repositorio incluye **las dos partes necesarias para ver la aplicación funcionando**:

| Carpeta | Contenido |
|---|---|
| [`hito6-pizzeria_mamma_mia/`](./hito6-pizzeria_mamma_mia) | **Frontend**: la aplicación React (Vite + Bootstrap + React Router). Es el trabajo de este hito. |
| [`backend-pizzas/`](./backend-pizzas) | **Backend**: la API de pizzas entregada como *Material de apoyo*. No fue modificado. |

> La aplicación necesita que el backend esté corriendo en `http://localhost:5000` para mostrar las pizzas (`Home` y `Pizza`), por eso no tiene demo en línea.

## Qué se implementó en este hito

- **`CartContext`** (`src/context/CartContext.jsx`): contexto y *Provider* del carrito. Guarda el estado `cart` y expone `total`, `agregarAlCarrito`, `aumentar` y `disminuir`.
- **`CartProvider`** envuelve a `App` en `main.jsx`, por lo que todos los componentes pueden consumir el carrito con `useContext`.
- **`Navbar`** muestra el **total real** del carrito (antes era un valor fijo).
- **`CardPizza`** (Home): el botón **Añadir** agrega la pizza al carrito.
- **`Cart`** muestra los productos del contexto, permite **agregar (+)** y **eliminar (−)** y muestra el total, que es **el mismo** que el del Navbar.
- **`Pizza`**: el botón **Añadir al carrito** también usa el contexto.
- El carrito parte **vacío**; ya no se usa el carrito simulado `pizzaCart` de `pizzas.js`.
- Se mantiene todo lo construido en los Hitos 1 a 5 (rutas, formularios, consumo de la API, etc.).

### Rutas de la aplicación

| Ruta | Componente |
|---|---|
| `/` | `Home` |
| `/register` | `Register` |
| `/login` | `Login` |
| `/cart` | `Cart` |
| `/pizza/p001` | `Pizza` |
| `/profile` | `Profile` |
| `/404` | `NotFound` |
| cualquier otra | redirige a `/404` |

El detalle de cada componente y los conceptos aplicados están en el [README del frontend](./hito6-pizzeria_mamma_mia/README.md).

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada) y npm.
- Git.

## Cómo ejecutar el proyecto

Se necesitan **dos terminales abiertas al mismo tiempo**.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Sahadia88/hito6_REACT-pizzeria_mamma_mia.git
cd hito6_REACT-pizzeria_mamma_mia
```

### 2. Terminal 1: levantar el backend

```bash
cd backend-pizzas
npm install
npm start
```

Debe aparecer el mensaje `Server is running on port http://localhost:5000`. Deja esta terminal abierta.

### 3. Terminal 2: levantar el frontend

```bash
cd hito6-pizzeria_mamma_mia
npm install
npm run dev
```

Abre en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

> Si la página muestra el mensaje *"No pudimos cargar las pizzas"*, el backend no está corriendo. Revisa que la Terminal 1 siga abierta y sin errores.

## Endpoints utilizados

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `http://localhost:5000/api/pizzas` | Devuelve un arreglo con todas las pizzas (usado en `Home`) |
| GET | `http://localhost:5000/api/pizzas/p001` | Devuelve una pizza según su id (usado en `Pizza`) |

Cada pizza incluye: `id`, `name`, `price`, `ingredients`, `img` y `desc`.

## Estructura del repositorio

```
hito6_REACT-pizzeria_mamma_mia/
├── README.md                      → este archivo
├── backend-pizzas/                → API de pizzas (Node.js + Express), sin modificar
│   ├── db/pizzas.json
│   ├── routes/ controllers/ models/
│   └── index.js
└── hito6-pizzeria_mamma_mia/      → aplicación React
    ├── src/
    │   ├── components/            → Navbar, Header, Footer, CardPizza
    │   ├── context/               → CartContext.jsx (carrito global)
    │   ├── pages/                 → Home, Register, Login, Cart, Pizza, Profile, NotFound
    │   └── utils/                 → formatNumber.js, imagenRespaldo.js
    └── README.md                  → detalle del frontend
```

## Tecnologías utilizadas

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [React Router](https://reactrouter.com/) v6, [Bootstrap 5](https://getbootstrap.com/), JavaScript (ES6+).
- **Backend (material de apoyo):** Node.js y Express.

## Conceptos de React aplicados en este hito

- **Estado local** vs **estado global**: por qué los estados de un componente no se comparten solos.
- **Prop drilling**: el problema de pasar props a través de muchos componentes.
- **Context API**: `createContext`, `Provider` y `useContext`.
- Un **Provider** como componente propio que guarda el estado y entrega `value` a sus hijos (`children`).
- Los **consumers** se vuelven a renderizar cuando cambia el valor del contexto.
- **Estado derivado**: el total se calcula con `reduce` desde `cart` en un solo lugar, para que Navbar y Cart siempre coincidan.
