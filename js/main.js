function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Obtener lista de usuarios registrados
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar usuario por email y password
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (usuario) {
    // Guardar el usuario logueado en sessionStorage
    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    alert(`¡Bienvenido, ${usuario.nombre}!`);
    // Redirigir a otra página (por ejemplo al home o al carrito)
    window.location.href = "pages/home.html"; 
  } else {
    alert("Email o contraseña incorrectos.");
  }
}