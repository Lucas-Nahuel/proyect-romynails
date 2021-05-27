document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img: '../images/imagen1.jpg'},
        {img: '../images/imagen2.jpg'},
        {img: '../images/imagen3.jpg'},
        {img: '../images/imagen4.jpg'},
        {img: '../images/imagen5.jpg'},
        {img: '../images/imagen6.jpg'},
        {img: '../images/imagen7.jpg'},
        {img: '../images/imagen8.jpg'},
        {img: '../images/imagen9.jpg'},
        {img: '../images/imagen10.jpg'},
        {img: '../images/imagen11.jpg'},
        {img: '../images/imagen12.jpg'},
        {img: '../images/imagen13.jpg'},
        {img: '../images/imagen14.jpg'},
        {img: '../images/imagen15.jpg'},
        {img: '../images/imagen16.jpg'},
        {img: '../images/imagen17.jpg'},
        {img: '../images/imagen18.jpg'}
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.proyect__row img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event){
        let left = contenedor.querySelector('.left'),
            right = contenedor.querySelector('.right'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == left) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img;
                contador--;
            } else {
                img.src = imagenes[imagenes.length - 1].img;
                contador = imagenes.length - 1;
            }
        } else if (tgt == right) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img;
                contador++;
            } else {
                img.src = imagenes[0].img;
                contador = 0;
            }
        }
    })


    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event  => {
             const imagen_seleccionada = +event.target.dataset.imgMostrar
             img_slideshow.src = imagenes[imagen_seleccionada].img
             contador = imagen_seleccionada
             overlay.style.opacity = 1
             overlay.style.visibility  = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})