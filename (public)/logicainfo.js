function obtenerParametroUrl(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

const id_producto = obtenerParametroUrl("id_producto");

if (id_producto) {
  fetch(`http://localhost:3000/producto/${id_producto}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("productoImagen").innerHTML = `<img src="${data.imagen_url}" class="img-fluid rounded">`;
      document.getElementById("productoNombre").textContent = data.nombre;
      document.getElementById("productoDescripcion").textContent = data.descripcion;
      document.getElementById("productoPrecio").textContent = `$${data.precio}`;
    })
    .catch(error => console.error("Error al cargar producto:", error));
}