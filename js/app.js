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
  

function sendMail(){
  var templateParams={
    email:document.getElementById("email").value,
    name:document.getElementById("name").value,
    surname:document.getElementById("surname").value,
    service:document.getElementById("service").value,
    date:document.getElementById("date").value,
    schedule:document.getElementById("schedule").value,
  };
  
  emailjs.send('service_p1lepsv', 'template_wjj3lgm', templateParams)
  .then(function(response){
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    console.log('FAILED...', error);
  });
};