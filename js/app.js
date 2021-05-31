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
  

  const sendMail = async () => {
    let templateParams = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      mobile: document.getElementById('mobile').value,
      message: document.getElementById('message').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
      schedule: document.getElementById('schedule').value
    }
    await emailjs.send("service_qw3ytyi", "template_wjj3lgm", templateParams)
    .then(function(response) {
      alert("se envio tu turno, espere a ser contactado", response.status, response.text);
      window.location.reload();
    })
  };
    