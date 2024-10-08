// Captura el evento de envío del formulario
document.getElementById('solicitudForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  // Validación de fechas
  const fechaInicio = new Date(document.getElementById('fechaInicio').value);
  const fechaFin = new Date(document.getElementById('fechaFin').value);
  const indefinido = document.getElementById('indefinido').checked;

  // Si el checkbox "indefinido" no está marcado, se valida la fecha de fin
  if (!indefinido && (isNaN(fechaFin) || fechaFin <= fechaInicio)) {
    alert('La fecha de fin debe ser mayor que la fecha de inicio.');
    return; // Salir de la función si las fechas no son válidas
  }

  // Mostrar mensaje de confirmación
  document.getElementById('confirmationMessage').style.display = 'block';

  // Resetea el formulario y oculta el mensaje de confirmación tras 4 segundos
  setTimeout(() => {
    document.getElementById('confirmationMessage').style.display = 'none';
    document.getElementById('solicitudForm').reset();
  }, 4000);
});

// Captura el cambio del estado del checkbox "indefinido"
document.getElementById('indefinido').addEventListener('change', function() {
  const fechaFinInput = document.getElementById('fechaFin');

  // Si el checkbox está marcado, deshabilitar el campo de fecha de fin
  if (this.checked) {
    fechaFinInput.disabled = true;
    fechaFinInput.value = '';  // Limpia el campo de fecha de fin
  } else {
    fechaFinInput.disabled = false; // Habilita el campo si el checkbox está desmarcado
  }
});

// Captura el clic en el botón "Regresar al Login" para redirigir al usuario a la página principal
document.getElementById('backButton').addEventListener('click', function() {
  window.location.href = '/';
});
