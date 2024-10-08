document.getElementById("perfilForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Verificar si las contraseñas coinciden
    if (password && password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
  
    // Guardar los datos en LocalStorage (temporal, hasta que se conecte a una base de datos)
    const usuario = {
      nombre: nombre,
      email: email,
      password: password 
    };
  
    localStorage.setItem("usuarioPerfil", JSON.stringify(usuario));
    alert("Perfil actualizado con éxito.");
  });
  