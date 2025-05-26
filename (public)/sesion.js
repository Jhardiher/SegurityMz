function actualizarEstadoSesion() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const loginItem = document.getElementById('login-item');
  const logoutItem = document.getElementById('logout-item');

  if (usuario) {
    loginItem?.classList.add('d-none');
    logoutItem?.classList.remove('d-none');
  } else {
    loginItem?.classList.remove('d-none');
    logoutItem?.classList.add('d-none');
  }

  document.getElementById('cerrarSesion')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
  });
}

// Exponerla para poder llamarla desde cualquier otro script
window.actualizarEstadoSesion = actualizarEstadoSesion;
