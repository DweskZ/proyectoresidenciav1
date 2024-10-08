// Evento que escucha la carga completa del documento
// Al cargar el DOM, se ejecuta el siguiente código
document.addEventListener("DOMContentLoaded", function () {
  
  // Recupera el objeto 'usuario' almacenado en LocalStorage y lo convierte de nuevo a un objeto de JavaScript
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Añade un evento al botón de "Cerrar Sesión"
  document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.clear(); // Limpia todos los datos almacenados en LocalStorage
    window.location.href = "/login"; // Redirige al usuario a la página de inicio de sesión
  });
});
