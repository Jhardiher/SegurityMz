document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const correo = document.getElementById('email').value.trim();
  const contraseña = document.getElementById('password').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, contraseña })
  })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
        // Guardar usuario en localStorage si quieres mantener sesión
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        window.location.href = 'index.html';
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Error en login:', error);
      alert('Error al iniciar sesión.');
    });
});
