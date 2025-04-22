// Cargar banner
fetch('banner.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('banner-container').innerHTML = html;
  })
  .catch(err => console.error('Error al cargar el banner:', err));
// Cargar tarjetas de productos
fetch('cards.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('productos-container').innerHTML = html;
    inicializarFiltro(); // Activamos filtros después de cargar productos
  })
  .catch(err => console.error('Error al cargar las tarjetas:', err));

// Cargar filtros
fetch('filtros.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('filtros-container').innerHTML = html;
  })
  .catch(err => console.error('Error al cargar filtros:', err));

// Lógica del filtro
function inicializarFiltro() {
  const form = document.getElementById('filtro-form');
  const tipoSelect = document.getElementById('tipo-camara');
  const minInput = document.getElementById('precio-min');
  const maxInput = document.getElementById('precio-max');

  // Verificar que los elementos existan antes de usar
  if (!form || !tipoSelect || !minInput || !maxInput) {
    console.warn("Formulario de filtro no encontrado en el DOM.");
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores de los filtros
    const tipo = tipoSelect.value;
    const min = parseFloat(minInput.value.replace(/[^0-9.]/g, '')) || 0; // Aseguramos que no haya caracteres no numéricos en el precio
    const max = parseFloat(maxInput.value.replace(/[^0-9.]/g, '')) || Infinity;

    console.log("Filtrando por:", tipo, min, max); // Para depurar

    // Obtener todos los productos
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      // Extraer tipo de producto y precio
      const tipoProducto = producto.dataset.tipo;
      const precioTexto = producto.querySelector('p').textContent.replace(/[^0-9.]/g, ''); // Limpiar texto de precio
      const precio = parseFloat(precioTexto);

      // Verificar si el producto cumple con las condiciones del filtro
      const coincideTipo = tipo === '' || tipo === tipoProducto;
      const coincidePrecio = precio >= min && precio <= max;

      // Mostrar u ocultar el producto según los filtros
      producto.style.display = (coincideTipo && coincidePrecio) ? 'block' : 'none';
    });
  });
}