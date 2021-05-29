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
  

  function sendEmail(params) {
    let tempParams={
      from_name:document.getElementById("email").value,
      to_name:document.getElementById("name").value,
      message:document.getElementById("service").value,
    };

    emailjs.send('service_9dznz7a', 'template_wjj3lgm', tempParams)
    .then(function(res){
      console.log("seccess", res.status);
    })
  }