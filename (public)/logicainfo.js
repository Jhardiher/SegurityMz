

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

  

function cargarProducto() {
  const productoId = getQueryParam('id');
  
  fetch(`http://localhost:3000/api/productos/${productoId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('producto-nombre').innerText = data.nombre;
      document.getElementById('producto-imagen').src = data.imagen;
      document.getElementById('producto-descripcion').innerText = data.descripcion;
    })
    .catch(error => {
      console.error('Error al obtener producto:', error);
    });
}

window.onload = cargarProducto;
