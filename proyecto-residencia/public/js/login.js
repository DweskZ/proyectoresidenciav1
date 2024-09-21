// Usuarios simulados (puedes cambiar esto por validaciones reales)
const usuarios = [
    { username: "admin", password: "123", role: "admin" },
    { username: "residente", password: "456", role: "residente" }
  ];
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorMessage = document.getElementById("error-message");
  
    // Buscar usuario en la lista simulada
    const usuario = usuarios.find(user => user.username === username && user.password === password);
  
    if (usuario) {
      // Guardar el rol del usuario en localStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
  
      // Verificar el rol y redirigir
      if (usuario.role === "admin") {
        console.log("Redirigiendo al dashboard de admin");
        window.location.href = "/dashboard";
      } else if (usuario.role === "residente") {
        console.log("Redirigiendo al dashboard de residente");
        window.location.href = "/dashboard_estudiante";
      }
    } else {
      // Mostrar mensaje de error si las credenciales no coinciden
      errorMessage.style.display = "block";
      console.log("Credenciales incorrectas");
    }
  });
  