// Función para abrir una pestaña y mostrar su contenido
// Recibe el evento `evt` y el nombre de la pestaña `tabName` a mostrar.
function openTab(evt, tabName) {
  // Oculta todo el contenido de las pestañas
  const tabContents = document.querySelectorAll('.tabcontent'); // Selecciona todos los elementos con la clase 'tabcontent'
  tabContents.forEach((content) => {
    content.classList.remove('active'); // Remueve la clase 'active' para ocultar el contenido
  });

  // Remueve la clase "active" de todos los botones de las pestañas
  const tabLinks = document.querySelectorAll('.tablink'); // Selecciona todos los elementos con la clase 'tablink'
  tabLinks.forEach((link) => {
    link.classList.remove('active'); // Remueve la clase 'active' de los botones
  });

  // Muestra el contenido de la pestaña seleccionada y añade la clase 'active'
  document.getElementById(tabName).classList.add('active'); // Añade la clase 'active' al contenido correspondiente a la pestaña
  evt.currentTarget.classList.add('active'); // Añade la clase 'active' al botón de la pestaña actual
}

// Evento para cargar la pestaña inicial
// Al cargar el documento, automáticamente hace clic en la pestaña que tiene la clase 'active'.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tablink.active').click(); // Simula un clic en la pestaña activa
});

// Evento para el botón de cerrar sesión
// Limpia los datos almacenados en LocalStorage y redirige al usuario a la página de inicio de sesión.
document.getElementById("logoutButton").addEventListener("click", function() {
  localStorage.clear(); // Limpia todos los datos guardados en LocalStorage
  window.location.href = "/login"; // Redirige al usuario a la página de inicio de sesión
});
