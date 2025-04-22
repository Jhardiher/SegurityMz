
  const productosContainer = document.getElementById('productos-container');

  // Aquí simulas 100 productos (puedes reemplazar estos valores con tu base de datos o JSON)
  const productos = Array.from({ length: 100 }, (_, i) => ({
    nombre: `Cámara ${i + 1}`,
    precio: `$${(100 + i * 5).toFixed(2)}`,
    imagen: "https://via.placeholder.com/250x150?text=Producto+" + (i + 1)
  }));

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('producto');
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button>Comprar</button>`;
    productosContainer.appendChild(card);
  });

