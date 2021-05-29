const personas =[
    { nombre: "angel", edad: 54},
    { nombre: "guada", edad: 10},
    { nombre: "ana", edad: 28},
    { nombre: "lucas", edad: 19},
    { nombre: "evelyn", edad: 22},
    { nombre: "juan", edad: 8},
    { nombre: "pedro", edad: 12},
    { nombre: "fabian", edad: 17},
    { nombre: "romina", edad: 30},
    { nombre: "ezequiel", edad: 25},
    { nombre: "santiago", edad: 13},
    { nombre: "leonardo", edad: 40}
];

function PersonasMayores(){   
    const mayores = personas.filter(persona => persona.edad > 18);
    console.log(mayores);
}

PersonasMayores();

////////////////////////////////////////////////////////////////////////////
/////////////////////////// STORAGE JSON //////////////////////////////////

 function guardarlocal(clave,valor) { 
     localStorage.setItem(clave, valor);
}

 for (const persona of personas) {
     guardarlocal(persona.nombre, JSON.stringify(persona));
 }

///////////////////////////////////////////////////////////////////////////
///////////////////////// DOM ////////////////////////////////////////////

//  function crearParrafo() {
//      let parrafo = $("body").append('<h1 id="produc">Productos</h1>');
//  }
 
//  crearParrafo();

//  const productos = [{ id: 1, nombre: "botines nike", precio: 8500},
//                     { id: 2, nombre: "botines puma", precio: 5500},
//                     { id: 3, nombre: "botines adidas", precio: 6500}];

// $(document).ready(function () {
//     $(".btnComprar").click(function (e) { 
//         let hijos = $(e.target).parent().children();
//         console.log(hijos[0].value);
//         $(e.target).parent().slideUp(1500)
//                             .slideDown(1500)
//                             .css("color", "green");
//     });
// });
                    

//  for (const producto of productos) {
//      $("body").append(  `<div id="listProduc">
//                             <h3>Marca: ${producto.id}</h3>
//                             <p>Producto: ${producto.nombre}</p>
//                             <p>Precio: ${producto.precio}</p>
//                             <button class="btnComprar">Comprar</button>
//                          </div>`);
//  };

//////////////////////////////////////////////////////////////////////////
///////////////////////// EVENTOS ///////////////////////////////////////

$( document ).ready(function() {
    console.log('El DOM esta listo');
});


 $('body').on('keydown', function(evento){
     if(evento.keyCode == 13){
         $('body').append('<input type="text">');
     }
 });

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

  //////////// validar el form