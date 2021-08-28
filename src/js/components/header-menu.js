export default function menuMobile(btn) {
    
    const classes = {
        openClass: 'is-open'
    }

    btn.addEventListener('click', (event) => {
        let modal = document.querySelector('.js-header-modal');
        modal.classList.toggle(classes.openClass);
    });
}