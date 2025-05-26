document.getElementById('registro-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo-registro').value.trim();
  const contraseña = document.getElementById('contraseña-registro').value;

  fetch('http://localhost:3000/registro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, correo, contraseña })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message || 'Registro realizado correctamente.');

      // Cerrar modal y limpiar
      const registroModal = bootstrap.Modal.getInstance(document.getElementById('registroModal'));
      registroModal.hide();
      this.reset();
    })
    .catch(error => {
      console.error('Error al registrar:', error);
      alert('Error al registrar usuario.');
    });
});
