let formSubmitted = false;

document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  
  if (formSubmitted) {
    return; // Si el formulario ya fue enviado, no hacer nada.
  }

  formSubmitted = true; // Marca el formulario como enviado

  console.log("Formulario enviado correctamente");

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;

  const camaras = [];
  document.querySelectorAll('input[name="tipo-camara[]"]:checked').forEach(function (el) {
    camaras.push(el.value);
  });

  if (camaras.length === 0) {
    alert('Por favor selecciona al menos un tipo de cámara.');
    formSubmitted = false; // Permite enviar el formulario nuevamente
    return;
  }

  const mensaje = `Hola, me llamo ${nombre}. Mi número es ${telefono}. Estoy interesado en las siguientes cámaras: ${camaras.join(', ')}.`;
  const numeroWhatsApp = "573232310187";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  const url2 = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`; //movil


  // Redirecciona a WhatsApp
  window.top.location.href = url,url2;
});
 //seguridad
const nombre = document.getElementById('nombre').value.trim();
const telefono = document.getElementById('telefono').value.trim();

if (!nombre.match(/^[a-zA-Z\s]+$/)) {
  alert("Nombre inválido.");
  return;
}

if (!telefono.match(/^\d{10}$/)) {
  alert("Número de teléfono inválido.");
  return;
}
