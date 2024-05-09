function mostrarForm(formulario) {
  var formLogin = document.getElementById('formulario-login');
  var formRegistro = document.getElementById('formulario-registro');
  var cerrar = document.getElementById('cerrar');

  if (formulario === 'login') {
    formLogin.style.display = 'block';
    formRegistro.style.display = 'none';
    cerrar.style.display = 'block';
  } else if (formulario === 'registro') {
    formRegistro.style.display = 'block';
    formLogin.style.display = 'none';
    cerrar.style.display = 'block';
  }
}


function cerrar() {
  var formLogin = document.getElementById('formulario-login');
  var formRegistro = document.getElementById('formulario-registro');
  var cerrar = document.getElementById('cerrar');


  formRegistro.style.display = 'none';
  formLogin.style.display = 'none';
  cerrar.style.display = 'none';

}



// coresponde para validar el formulario de contacto



// Función para validar el formato de email
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Función para mostrar un mensaje de error con SweetAlert
function showError(message) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
  });
}

// Función para mostrar un mensaje de éxito con SweetAlert
function showSuccess(message) {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: message,
  });
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var message = document.getElementById('message').value.trim();
  var addPhone = document.getElementById('addPhone').checked;

  // Validar los campos
  if (name === '') {
    showError('Por favor, introduce tu nombre.');
  } else if (email === '') {
    showError('Por favor, introduce tu email.');
  } else if (!validateEmail(email)) {
    showError('Por favor, introduce una dirección de correo electrónico válida.');
  } else if (addPhone && phone === '') {
    showError('Por favor, introduce tu número de teléfono.');
  } else if (message === '') {
    showError('Por favor, introduce tu mensaje.');
  } else {
    // Enviar el formulario si todos los campos son válidos
    showSuccess('¡Gracias! Hemos recibido tu mensaje.');
    // Aquí puedes enviar el formulario a través de AJAX o realizar otras acciones necesarias
    // Este es solo un ejemplo básico
  }


});




