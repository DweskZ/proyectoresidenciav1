// Mostrar los pagos del estudiante
function mostrarPagosEstudiante() {
    const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    const tablaCuerpo = document.querySelector("tbody");
    tablaCuerpo.innerHTML = ""; // Limpiar la tabla
  
    pagos.forEach(pago => {
      if (pago.residente === "Estudiante") {  // Solo mostrar los pagos del estudiante
        const fila = document.createElement("tr");
  
        const celdaResidente = document.createElement("td");
        celdaResidente.textContent = pago.residente;
        fila.appendChild(celdaResidente);
  
        const celdaMonto = document.createElement("td");
        celdaMonto.textContent = `$${pago.monto}`;
        fila.appendChild(celdaMonto);
  
        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = pago.estado;
        fila.appendChild(celdaEstado);
  
        tablaCuerpo.appendChild(fila);
      }
    });
  }
  