// Datos iniciales de habitaciones y residentes
// Se define un array de objetos que contiene el estado inicial de las habitaciones.
// Cada objeto tiene un `id`, el `numero` de la habitación, su `estado` y el `residente` asignado (si lo hay).
const habitacionesIniciales = [
  { id: 1, numero: "1", estado: "ocupada", residente: "Juan Pérez" },
  { id: 2, numero: "2", estado: "disponible", residente: null },
  { id: 3, numero: "3", estado: "disponible", residente: null }
];

// Guardar datos iniciales en LocalStorage si no existen
// Si no existen datos de habitaciones en el LocalStorage, se guardan los valores iniciales definidos anteriormente.
if (!localStorage.getItem("habitaciones")) {
  localStorage.setItem("habitaciones", JSON.stringify(habitacionesIniciales));
}

// Función para mostrar las habitaciones en la tabla
// Esta función lee los datos de habitaciones desde LocalStorage y las muestra en una tabla HTML.
function mostrarHabitaciones() {
  const habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
  const tablaCuerpo = document.querySelector("tbody"); // Selecciona el cuerpo de la tabla
  tablaCuerpo.innerHTML = ""; // Limpia el contenido previo de la tabla

  // Itera sobre cada habitación para crear una fila en la tabla
  habitaciones.forEach((habitacion) => {
    const fila = document.createElement("tr");

    // Crear y agregar celdas de número, estado y residente
    const celdaNumero = document.createElement("td");
    celdaNumero.textContent = habitacion.numero;
    fila.appendChild(celdaNumero);

    const celdaEstado = document.createElement("td");
    celdaEstado.textContent = habitacion.estado;
    fila.appendChild(celdaEstado);

    const celdaResidente = document.createElement("td");
    celdaResidente.textContent = habitacion.residente || "Sin residente";
    fila.appendChild(celdaResidente);

    // Crear y agregar el botón de detalles (opcional)
    const celdaAcciones = document.createElement("td");
    const botonDetalles = document.createElement("button");
    botonDetalles.textContent = "Detalles";
    // Aquí puedes agregar un evento de click para manejar los detalles
    celdaAcciones.appendChild(botonDetalles);
    fila.appendChild(celdaAcciones);

    // Agregar la fila completa al cuerpo de la tabla
    tablaCuerpo.appendChild(fila);
  });
}

// Función para asignar una habitación a un residente
// Recibe el `idHabitacion` y el `nombreResidente`, busca la habitación y la asigna si está disponible.
function asignarHabitacion(idHabitacion, nombreResidente) {
  let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
  habitaciones = habitaciones.map((habitacion) => {
    if (habitacion.id === idHabitacion && habitacion.estado === "disponible") {
      habitacion.estado = "ocupada";
      habitacion.residente = nombreResidente;
    }
    return habitacion;
  });

  // Actualiza los datos en LocalStorage y refresca la tabla
  localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
  mostrarHabitaciones();
}

// Inicializa la tabla al cargar la página
// Esta función se ejecuta cuando el DOM está completamente cargado.
document.addEventListener("DOMContentLoaded", mostrarHabitaciones);

// Función para agregar una nueva habitación
// Recibe el `numeroHabitacion` y la agrega al array de habitaciones en LocalStorage.
function agregarHabitacion(numeroHabitacion) {
  let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));

  // Crear una nueva habitación con el número proporcionado
  const nuevaHabitacion = {
    id: habitaciones.length + 1, // Asigna un ID basado en el tamaño actual del array
    numero: numeroHabitacion,
    estado: "disponible",
    residente: null
  };

  // Agregar la nueva habitación y actualizar el LocalStorage
  habitaciones.push(nuevaHabitacion);
  localStorage.setItem("habitaciones", JSON.stringify(habitaciones));

  mostrarHabitaciones(); // Refresca la tabla
}

// Función para eliminar una habitación
// Recibe el `idHabitacion` y la elimina del array de habitaciones.
function eliminarHabitacion(idHabitacion) {
  let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));

  // Filtra la habitación por su ID y elimina la coincidencia
  habitaciones = habitaciones.filter(habitacion => habitacion.id !== idHabitacion);

  // Actualiza los datos en LocalStorage y refresca la tabla
  localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
  mostrarHabitaciones();
}

// Función para mostrar la cuadrícula de selección de habitaciones en un desplegable
function mostrarCuadriculaHabitaciones() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show"); // Muestra u oculta la cuadrícula

  const habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || [];
  const habitacionesOcupadas = habitaciones.map(h => h.numero); // Obtiene los números de habitaciones ocupadas

  // Limpia el contenido previo
  dropdownContent.innerHTML = "";

  // Crea botones para habitaciones del 1 al 50
  for (let i = 1; i <= 50; i++) {
    const botonHabitacion = document.createElement("button");
    botonHabitacion.textContent = i;

    if (habitacionesOcupadas.includes(i.toString())) {
      botonHabitacion.disabled = true; // Deshabilita las habitaciones ocupadas
      botonHabitacion.style.backgroundColor = "red"; // Color para habitaciones ocupadas
    }

    botonHabitacion.addEventListener("click", () => {
      agregarHabitacion(i); // Agrega la habitación seleccionada
      dropdownContent.classList.remove("show"); // Oculta la cuadrícula tras seleccionar
    });

    dropdownContent.appendChild(botonHabitacion);
  }
}

// Función para cerrar sesión y limpiar los datos del LocalStorage
// Este botón redirige a la página de login tras limpiar los datos.
document.getElementById("logoutButton").addEventListener("click", function() {
  localStorage.clear(); // Limpia todos los datos almacenados
  window.location.href = "/login"; // Redirige al login
});
