function mostrarForm(formulario) {
    var formLogin = document.getElementById('formulario-login');
    var formRegistro = document.getElementById('formulario-registro');
  
    if (formulario === 'login') {
      formLogin.style.display = 'block';
      formRegistro.style.display = 'none';
    } else if (formulario === 'registro') {
      formRegistro.style.display = 'block';
      formLogin.style.display = 'none';
    }


    
  }
  