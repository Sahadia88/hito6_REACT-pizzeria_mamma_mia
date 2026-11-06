const Profile = () => {
  // Por ahora el email es estático; la autenticación se trabajará en los próximos hitos.
  const email = "mammamia@pizzeria.cl";

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-sm text-center">
            <div className="card-body p-4">
              <div className="display-3 mb-2">👤</div>
              <h1 className="h3 mb-3">Mi perfil</h1>

              <p className="text-muted mb-1">Email</p>
              <p className="fs-5 fw-semibold mb-4">{email}</p>

              {/* Botón estático por ahora, sin funcionalidad */}
              <button type="button" className="btn btn-dark">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
