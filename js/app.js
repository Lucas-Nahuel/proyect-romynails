 ///////////////////////////////animacion scroll/////////////////////////////////////

 $(document).ready(function() {
    $('a[href^="#proyects"]').click(function scrollMove() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });

$(document).ready(function() {
  $('a[href^="#contacts"]').click(function scrollMove() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
    return false;
  });
});

$(document).ready(function() {
    $('a[href^="#index"]').click(function scrollMove() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });

  $(document).ready(function() {
    $('a[href^="#reservation"]').click(function scrollMove() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });

  $(document).ready(function() {
    $('a[href^="#service"]').click(function scrollMove() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });
  
  const $form = document.querySelector('#reservation')
  const $buttonMailto = document.querySelector('#trucazo')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:lukitasr8@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('service')}`)
    $buttonMailto.click()
  }