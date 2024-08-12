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
            top: target.offsetTop - 90,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const panzoomContainer = document.getElementById('panzoom-container');
    
    let panzoomInstance;

    document.querySelectorAll('.lightbox-trigger').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const imgSrc = this.getAttribute('href');
            lightboxImg.setAttribute('src', imgSrc);

            if (panzoomInstance) {
                panzoomInstance.dispose();
            }
            panzoomInstance = Panzoom(panzoomContainer, {
                maxZoom: 5,
                minZoom: 1,
                zoomDoubleClickSpeed: 1
            });

            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        if (panzoomInstance) {
            panzoomInstance.dispose();
        }
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === this) {
            lightbox.style.display = 'none';
            if (panzoomInstance) {
                panzoomInstance.dispose();
            }
        }
    });
});
