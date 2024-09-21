// Verificar si hay solicitudes almacenadas en LocalStorage al cargar la página
let solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];

// Función para mostrar las solicitudes en la tabla
function mostrarSolicitudesEstudiante() {
    const listaSolicitudes = document.getElementById('listaSolicitudes');
    listaSolicitudes.innerHTML = '';

    solicitudes.forEach((solicitud, index) => {
        let row = `
          <tr>
            <td>${solicitud.descripcion}</td>
            <td>${solicitud.estado}</td>
          </tr>
        `;
        listaSolicitudes.innerHTML += row;
    });
}

// Función para agregar una nueva solicitud
function agregarSolicitudEstudiante(descripcion) {
    const nuevaSolicitud = {
        descripcion: descripcion,
        estado: 'Pendiente' // Estado inicial de la solicitud
    };
    solicitudes.push(nuevaSolicitud);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes)); // Guardar en LocalStorage
    mostrarSolicitudesEstudiante();
}

// Evento que se ejecuta al cargar la página para mostrar solicitudes existentes
document.addEventListener("DOMContentLoaded", () => {
    mostrarSolicitudesEstudiante();
});

// Evento al hacer clic en "Nueva Solicitud"
document.getElementById("agregarSolicitud").addEventListener("click", () => {
    const descripcion = prompt("Ingrese la descripción del problema:");
    if (descripcion) {
        agregarSolicitudEstudiante(descripcion);
    }
});
