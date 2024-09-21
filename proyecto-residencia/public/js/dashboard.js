document.addEventListener("DOMContentLoaded", function () {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (!usuario || usuario.role !== "admin") {
      window.location.href = "/login"; // Redirigir al login si no es administrador
    }
  });
  