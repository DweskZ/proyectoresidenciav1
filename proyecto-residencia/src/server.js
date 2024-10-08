const express = require('express');
const path = require('path');
const favicon = require('serve-favicon'); 
const app = express();

app.use(favicon(path.join(__dirname, '../public/img/favicon.ico')));


// Configurar la carpeta 'public' para archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para la página de inicio de sesión
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Ruta para la página de solicitud de residencia
app.get('/solicitud_residencia', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/solicitud_residencia.html'));
});

// Rutas para el administrador

// Ruta para el dashboard del administrador
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});

// Ruta para la página de gestión de habitaciones
app.get('/habitaciones', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/habitaciones.html'));
});

// Ruta para la página de gestión de pagos
app.get('/pagos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/pagos.html'));
});

// Ruta para la página de solicitudes de mantenimiento
app.get('/solicitudes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/solicitudes.html'));
});

// Rutas para el residente (estudiante)

// Ruta para el dashboard del residente
app.get('/dashboard_estudiante', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/dashboard_estudiante.html'));
});


app.get('/perfil_estudiante', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/perfil_estudiante.html'));
});


// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});


// Ruta para la página de inicio de sesión
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/perfil.html'));
});


// Ruta para la página de error 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
