document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    // Obtiene las cámaras seleccionadas
    const camaras = [];
    document.querySelectorAll('input[name="tipo-camara[]"]:checked').forEach((el) => {
      camaras.push(el.value);
    });

    // Validación básica
    if(camaras.length === 0){
      alert('Por favor selecciona al menos un tipo de cámara.');
      return;
    }
      //mesnaje de whatasspa esperado
    const mensaje = `Hola, me llamo ${nombre}. Mi número es ${telefono}. Estoy interesado en las siguientes cámaras: ${camaras.join(', ')}.`;

    
    const numeroWhatsApp = "573232310187"; // ← Cambia este por tu número real

    // Crea el enlace de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Redirecciona al usuario
    window.open(url, '_blank');
  });