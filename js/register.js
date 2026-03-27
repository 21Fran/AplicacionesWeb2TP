function register(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const fecha = document.getElementById("fecha").value;

  // Validar campos
  if (!nombre || !apellido || !email || !password || !fecha) {
    alert("Completa todos los campos.");
    return;
  }

  // Crear objeto de usuario
  const nuevoUsuario = { nombre, apellido, email, password, fecha };

  // Obtener usuarios existentes (si no hay, crear array vacío)
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el email ya está registrado
  const existe = usuarios.some(u => u.email === email);
  if (existe) {
    alert("Este email ya está registrado. Intenta con otro.");
    return;
  }

  // Agregar el nuevo usuario y guardar lista actualizada en localStorage
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Guardar al usuario actual en sessionStorage (logueado)
  sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

  alert("Registro exitoso. Ahora estás logueado.");
  window.location.href = "../index.html"; // Redirigir al login o inicio
}