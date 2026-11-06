import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mensaje, setMensaje] = useState(null);

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMensaje({ tipo: "danger", texto: "Todos los campos son obligatorios." });
      return;
    }

    if (password.length < 6) {
      setMensaje({
        tipo: "danger",
        texto: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setMensaje({ tipo: "danger", texto: "Las contraseñas no coinciden." });
      return;
    }

    setMensaje({ tipo: "success", texto: "¡Registro exitoso!" });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="mb-4">Register</h1>

          {mensaje && (
            <div className={`alert alert-${mensaje.tipo}`} role="alert">
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={validarDatos}>
            <div className="mb-3">
              <label htmlFor="register-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="register-email"
                name="email"
                className="form-control"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="register-password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="register-password"
                name="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="register-confirm" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="register-confirm"
                name="confirmPassword"
                className="form-control"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
