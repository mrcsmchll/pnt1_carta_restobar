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
   