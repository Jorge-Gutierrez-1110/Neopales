document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 90, // Recordatorio - ajusta el numero
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [ 
            'zoom',
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
        ],
        loop: true, // Permite navegar en bucle entre imágenes
        protect: true, // Protege las imágenes contra la descarga
        transitionEffect: 'fade', // Efecto de transición entre imágenes
        caption: function(instance, item) {
            return $(this).find('img').attr('alt'); // Usa el atributo alt como texto de la imagen
        }
    });
});