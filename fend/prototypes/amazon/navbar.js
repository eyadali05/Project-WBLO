const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sideLinks = document.querySelectorAll('.sidebar-links li');

    //nav toggler
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.25}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');

    });


}

navSlide();