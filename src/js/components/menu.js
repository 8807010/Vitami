export default function menuMobile(btn) {
    let modal = document.querySelector('.js-header-modal');

    btn.addEventListener('click', (event) => {
        if (modal.classList.contains('is-open')) {
            modal.classList.remove('is-open')
        } else {
            modal.classList.add('is-open')
        }
    });

    window.addEventListener('resize', (event) => {
        if (modal.classList.contains('is-open')) {
            modal.classList.remove('is-open')
        }
    })

}