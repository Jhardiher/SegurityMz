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
    inicializarFiltros(); // Activar filtros después de cargar
  })
  .catch(err => console.error('Error al cargar las tarjetas:', err));



  // Cargar el filtro
fetch('filtros.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('filtros-container').innerHTML = html;

    // Inicializar lógica del filtro una vez insertado en el DOM
    inicializarFiltro(); 
  })
  .catch(err => console.error('Error al cargar filtros:', err));

// Paso 1: Cargar productos
fetch('cards.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('productos-container').innerHTML = data;

    // Paso 2: Luego de cargar productos, cargar filtros
    return fetch('filtros.html');
  })
  .then(res => res.text())
  .then(html => {
    document.getElementById('filtros-container').innerHTML = html;

    // Paso 3: Inicializar la lógica de filtros cuando todo está en el DOM
    inicializarFiltro();
  })
  .catch(err => console.error('Error al cargar elementos:', err));


  
// Lógica del filtro
function inicializarFiltro() {
  const form = document.getElementById('filtro-form');
  const tipoSelect = document.getElementById('tipo-camara');
  const minInput = document.getElementById('precio-min');
  const maxInput = document.getElementById('precio-max');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const tipo = tipoSelect.value;
    const min = parseFloat(minInput.value) || 0;
    const max = parseFloat(maxInput.value) || Infinity;

    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      const tipoProducto = producto.dataset.tipo;
      const precioTexto = producto.querySelector('p').textContent.replace(/[^0-9.]/g, '');
      const precio = parseFloat(precioTexto);

      const coincideTipo = tipo === '' || tipo === tipoProducto;
      const coincidePrecio = precio >= min && precio <= max;

      producto.style.display = (coincideTipo && coincidePrecio) ? 'block' : 'none';
    });
  });
}


