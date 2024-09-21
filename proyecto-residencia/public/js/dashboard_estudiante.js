document.addEventListener("DOMContentLoaded", function () {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (!usuario || usuario.role !== "residente") {
      window.location.href = "/login"; // Redirigir al login si no es residente
    }
  });
  
// Cargar el resumen para el residente
function cargarResumenEstudiante() {
    // Obtener la información de la habitación del estudiante
    const habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || [];
    const habitacionEstudiante = habitaciones.find(h => h.residente === "Estudiante");
    document.getElementById("habitacion").textContent = habitacionEstudiante ? habitacionEstudiante.numero : "No asignada";
  
    // Obtener pagos pendientes del estudiante
    const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    const pagosPendientes = pagos.filter(pago => pago.estado === "pendiente").length;
    document.getElementById("pagosPendientes").textContent = pagosPendientes;
  
    // Obtener solicitudes pendientes del estudiante
    const solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];
    const solicitudesPendientes = solicitudes.filter(solicitud => solicitud.estado === "pendiente").length;
    document.getElementById("solicitudesPendientes").textContent = solicitudesPendientes;
  }
  