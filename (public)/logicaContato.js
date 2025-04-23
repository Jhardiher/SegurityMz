document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulario enviado correctamente");

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    const camaras = [];
    document.querySelectorAll('input[name="tipo-camara[]"]:checked').forEach(function (el) {
        camaras.push(el.value);
    });

    if (camaras.length === 0) {
        alert('Por favor selecciona al menos un tipo de cámara.');
        return;
    }

    const mensaje = `Hola, me llamo ${nombre}. Mi número es ${telefono}. Estoy interesado en las siguientes cámaras: ${camaras.join(', ')}.`;
    const numeroWhatsApp = "573232310187";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.top.location.href = url;
});
