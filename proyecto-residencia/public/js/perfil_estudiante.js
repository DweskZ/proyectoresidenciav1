// Escuchar el evento 'DOMContentLoaded' para ejecutar el código una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el usuario almacenado en el LocalStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay un usuario o no es un residente, redirigir a la página de inicio de sesión
  if (!usuario || usuario.role !== "residente") {
    window.location.href = "/login"; // Redirigir al login si no es residente
  }

  // Cargar la información del resumen del estudiante
  cargarResumenEstudiante();
});

/**
 * Función para cargar el resumen del estudiante.
 * Obtiene la información del residente desde el LocalStorage, incluidas las habitaciones, pagos y solicitudes.
 */
function cargarResumenEstudiante() {
  // Obtener la información de las habitaciones desde el LocalStorage
  const habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || [];
  // Buscar la habitación del estudiante, considerando que su nombre sea "Estudiante"
  const habitacionEstudiante = habitaciones.find(h => h.residente === "Estudiante");
  // Mostrar el número de habitación asignado al estudiante, o "No asignada" si no tiene habitación
  document.getElementById("habitacion").textContent = habitacionEstudiante ? habitacionEstudiante.numero : "No asignada";

  // Obtener los pagos pendientes desde el LocalStorage
  const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  // Contar la cantidad de pagos pendientes
  const pagosPendientes = pagos.filter(pago => pago.estado === "pendiente").length;
  // Mostrar la cantidad de pagos pendientes
  document.getElementById("pagosPendientes").textContent = pagosPendientes;

  // Obtener las solicitudes de mantenimiento desde el LocalStorage
  const solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];
  // Contar la cantidad de solicitudes pendientes
  const solicitudesPendientes = solicitudes.filter(solicitud => solicitud.estado === "pendiente").length;
  // Mostrar la cantidad de solicitudes pendientes
  document.getElementById("solicitudesPendientes").textContent = solicitudesPendientes;
}

// Función para cerrar la sesión, que limpia los datos de LocalStorage y redirige al usuario al login
document.getElementById("logoutButton").addEventListener("click", function() {
  // Limpiar el LocalStorage para eliminar toda la información almacenada
  localStorage.clear();
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = "/login";
});
