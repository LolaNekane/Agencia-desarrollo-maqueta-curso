document.addEventListener("DOMContentLoaded", () => {

    // Selecionar el boton del menú
    let mobile_btn = document.querySelector('.navbar__mobile_btn');

    //Seleccionar el menu
    let mobile_menu = document.querySelector('.menu-mobile');

    // Seleccionar menu boton cerrar
    let mobile_btn_menu = document.querySelector('.menu-mobile__icon-close')


    mobile_btn.addEventListener('click', (event) => {
        let menu_show = document.querySelector('.menu-mobile--show');

        if(menu_show) {
            mobile_menu.classList.remove('menu-mobile--show')
        } else {
            mobile_menu.classList.add('menu-mobile--show')

        }
    });

    mobile_btn_menu.addEventListener('click', (event) => {
        mobile_menu.classList.remove('menu-mobile--show')
    });

    window.addEventListener('resize', () => {

        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000) {
            mobile_menu.classList.remove('menu-mobile--show')
        }
    })



    //Despelegar submenús
    let menu_item = document.querySelectorAll('.menu-mobile__item');

    menu_item.forEach(item => {
        item.addEventListener('click', (event) => {
            let submenu = item.lastElementChild;

            if(submenu.className === 'menu-mobile__submenu') {
                if(submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        })
    })
});