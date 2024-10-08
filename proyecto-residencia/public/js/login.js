// Lista simulada de usuarios con sus credenciales y roles (puede reemplazarse por una autenticación real en el servidor)
const usuarios = [
  { username: "admin", password: "123", role: "admin" }, // Usuario administrador
  { username: "residente", password: "456", role: "residente" } // Usuario residente
];

// Añade un evento al formulario de login cuando se envía
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Recupera los valores de usuario y contraseña ingresados en los campos del formulario
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const errorMessage = document.getElementById("error-message"); // Elemento donde se mostrará el mensaje de error

  // Busca si el usuario existe en la lista de usuarios simulada
  const usuario = usuarios.find(user => user.username === username && user.password === password);

  // Si el usuario y contraseña coinciden, guarda la información del usuario y redirige según el rol
  if (usuario) {
    // Guardar el objeto 'usuario' en LocalStorage para su uso posterior
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Verificar el rol del usuario para redirigirlo a la página correspondiente
    if (usuario.role === "admin") {
      console.log("Redirigiendo al dashboard de admin");
      window.location.href = "/dashboard"; // Redirigir a dashboard del administrador
    } else if (usuario.role === "residente") {
      console.log("Redirigiendo al dashboard de residente");
      window.location.href = "/dashboard_estudiante"; // Redirigir a dashboard del residente
    }
  } else {
    // Si las credenciales no coinciden, muestra el mensaje de error
    errorMessage.style.display = "block";
    console.log("Credenciales incorrectas");
  }
});
