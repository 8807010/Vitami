export default function menuMobile(btn) {
    let menu = document.querySelector('.js-header-menu');
    console.log(menu);

    btn.addEventListener('click', (event) => {
        if (menu.classList.contains('is-open')) {
            menu.classList.remove('is-open')
        } else {
            menu.classList.add('is-open')
        }
    });
}