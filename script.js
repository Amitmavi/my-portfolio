/************************ Toggle icon navbar ******************* */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/************************ Scroll section design ******************* */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /******************************** Sticky navbar ********************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /************************ Remove toggle icon and navbar ******************* */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/************************ Scroll reveal ******************* */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.reveal, .heading', { origin: 'top' });
ScrollReveal().reveal('.reveal-left, .home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.reveal-right .home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.reveal-bottom, .home-img, .services-container, .portfolio-box, .contact form, .skill-section', { origin: 'bottom' });


/************************ Typed.js Initialization ******************* */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'React Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
