// Datos iniciales de habitaciones y residentes
const habitacionesIniciales = [
    { id: 1, numero: "101", estado: "ocupada", residente: "Juan Pérez" },
    { id: 2, numero: "102", estado: "disponible", residente: null },
    { id: 3, numero: "103", estado: "disponible", residente: null }
  ];
  
  // Guardar datos iniciales en LocalStorage si no existen
  if (!localStorage.getItem("habitaciones")) {
    localStorage.setItem("habitaciones", JSON.stringify(habitacionesIniciales));
  }
  
  // Mostrar las habitaciones en la tabla
  function mostrarHabitaciones() {
    const habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
    const tablaCuerpo = document.querySelector("tbody"); // Seleccionar el cuerpo de la tabla
    tablaCuerpo.innerHTML = ""; // Limpiar el contenido anterior
  
    habitaciones.forEach((habitacion) => {
      const fila = document.createElement("tr");
  
      // Crear las celdas de la tabla
      const celdaNumero = document.createElement("td");
      celdaNumero.textContent = habitacion.numero;
      fila.appendChild(celdaNumero);
  
      const celdaEstado = document.createElement("td");
      celdaEstado.textContent = habitacion.estado;
      fila.appendChild(celdaEstado);
  
      const celdaResidente = document.createElement("td");
      celdaResidente.textContent = habitacion.residente || "Sin residente";
      fila.appendChild(celdaResidente);
  
      // Crear el botón de acciones
      const celdaAcciones = document.createElement("td");
      const botonDetalles = document.createElement("button");
      botonDetalles.textContent = "Detalles";
      // Aquí puedes agregar un evento de click para los detalles si es necesario
      celdaAcciones.appendChild(botonDetalles);
      fila.appendChild(celdaAcciones);
  
      // Agregar la fila a la tabla
      tablaCuerpo.appendChild(fila);
    });
  }
  
  // Asignar una habitación a un residente
  function asignarHabitacion(idHabitacion, nombreResidente) {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
    habitaciones = habitaciones.map((habitacion) => {
      if (habitacion.id === idHabitacion && habitacion.estado === "disponible") {
        habitacion.estado = "ocupada";
        habitacion.residente = nombreResidente;
      }
      return habitacion;
    });
  
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
    mostrarHabitaciones(); // Refrescar la tabla de habitaciones
  }
  
  // Inicializar la tabla al cargar la página
  document.addEventListener("DOMContentLoaded", mostrarHabitaciones);
  

  // Función para agregar una habitación
function agregarHabitacion(numeroHabitacion) {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
  
    // Crear una nueva habitación
    const nuevaHabitacion = {
      id: habitaciones.length + 1, // ID basado en el tamaño actual
      numero: numeroHabitacion,
      estado: "disponible",
      residente: null
    };
  
    // Agregar la nueva habitación al array
    habitaciones.push(nuevaHabitacion);
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
  
    mostrarHabitaciones(); // Refrescar la lista
  }

  
  // Función para eliminar una habitación
function eliminarHabitacion(idHabitacion) {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
  
    // Filtrar y eliminar la habitación con el ID dado
    habitaciones = habitaciones.filter(habitacion => habitacion.id !== idHabitacion);
  
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
  
    mostrarHabitaciones(); // Refrescar la lista
  }
  

  // Asignar una habitación a un residente
function asignarHabitacion(idHabitacion, nombreResidente) {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
    habitaciones = habitaciones.map((habitacion) => {
      if (habitacion.id === idHabitacion && habitacion.estado === "disponible") {
        habitacion.estado = "ocupada";
        habitacion.residente = nombreResidente;
      }
      return habitacion;
    });
  
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
    mostrarHabitaciones(); // Refrescar la tabla de habitaciones
  }
  

  // Mostrar las habitaciones en la tabla
function mostrarHabitaciones() {
    const habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
    const tablaCuerpo = document.querySelector("tbody"); // Seleccionar el cuerpo de la tabla
    tablaCuerpo.innerHTML = ""; // Limpiar el contenido anterior
  
    habitaciones.forEach((habitacion) => {
      const fila = document.createElement("tr");
  
      // Crear las celdas de la tabla
      const celdaNumero = document.createElement("td");
      celdaNumero.textContent = habitacion.numero;
      fila.appendChild(celdaNumero);
  
      const celdaEstado = document.createElement("td");
      celdaEstado.textContent = habitacion.estado;
      fila.appendChild(celdaEstado);
  
      const celdaResidente = document.createElement("td");
      celdaResidente.textContent = habitacion.residente || "Sin residente";
      fila.appendChild(celdaResidente);
  
      // Crear los botones de acciones
      const celdaAcciones = document.createElement("td");
  
      // Botón para asignar residente si está disponible
      if (habitacion.estado === "disponible") {
        const botonAsignar = document.createElement("button");
        botonAsignar.textContent = "Asignar Residente";
        botonAsignar.addEventListener("click", () => {
          const nombreResidente = prompt("Ingrese el nombre del residente:");
          if (nombreResidente) {
            asignarHabitacion(habitacion.id, nombreResidente);
          }
        });
        celdaAcciones.appendChild(botonAsignar);
      }
  
      // Botón para eliminar habitación
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.style.backgroundColor = "red";
      botonEliminar.addEventListener("click", () => {
        if (confirm(`¿Está seguro de que desea eliminar la habitación ${habitacion.numero}?`)) {
          eliminarHabitacion(habitacion.id);
        }
      });
      celdaAcciones.appendChild(botonEliminar);
  
      fila.appendChild(celdaAcciones);
      tablaCuerpo.appendChild(fila);
    });
  }
  

 // Mostrar la cuadrícula de selección de habitaciones como un desplegable
function mostrarCuadriculaHabitaciones() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show"); // Mostrar/Ocultar la cuadrícula
  
    const habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || [];
    const habitacionesOcupadas = habitaciones.map(h => h.numero); // Obtener los números de habitaciones ocupadas
  
    // Limpiar contenido previo
    dropdownContent.innerHTML = "";
  
    // Crear botones para las habitaciones del 1 al 50
    for (let i = 1; i <= 50; i++) {
      const botonHabitacion = document.createElement("button");
      botonHabitacion.textContent = i;
  
      if (habitacionesOcupadas.includes(i.toString())) {
        botonHabitacion.disabled = true; // Deshabilitar habitaciones ocupadas
        botonHabitacion.style.backgroundColor = "red"; // Color para habitaciones ocupadas
      }
  
      botonHabitacion.addEventListener("click", () => {
        agregarHabitacion(i);
        dropdownContent.classList.remove("show"); // Ocultar la cuadrícula después de seleccionar
      });
  
      dropdownContent.appendChild(botonHabitacion);
    }
  }
  
  // Actualizar la función de agregar habitación
  function agregarHabitacion(numeroHabitacion) {
    let habitaciones = JSON.parse(localStorage.getItem("habitaciones"));
  
    // Crear una nueva habitación
    const nuevaHabitacion = {
      id: habitaciones.length + 1,
      numero: numeroHabitacion.toString(),
      estado: "disponible",
      residente: null
    };
  
    // Agregar la nueva habitación al array
    habitaciones.push(nuevaHabitacion);
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
  
    mostrarHabitaciones(); // Refrescar la lista
  }
  

  document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "/login";
  });
  