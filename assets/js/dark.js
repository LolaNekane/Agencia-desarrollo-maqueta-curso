document.addEventListener('DOMContentLoaded', () => {
    let switcher = document.querySelector('.switcher__btn');

    let light = document.querySelector('.switcher__icon-light');
    let dark = document.querySelector('.switcher__icon-dark');

    let logo = document.querySelector('.navbar__logo-light');
    let logo_mobile = document.querySelector('.menu-mobile__logo');

    switcher.addEventListener('click', () => {
        let head = document.head;

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './assets/css/dark.css';
        link.id = 'theme-dark';

        let theme_dark = document.querySelector('#theme-dark');

        if(theme_dark) {
            head.removeChild(theme_dark);
            light.style.display = 'block';
            dark.style.display = 'none';

            logo.src = "assets/img/logo1.png";
            logo_mobile.src = "assets/img/logo1.png";

        } else {
            head.appendChild(link);
            dark.style.display = 'block';
            light.style.display = 'none';

            logo.src = "assets/img/logo2.png";
            logo_mobile.src = "assets/img/logo2.png";
        }
    })
})