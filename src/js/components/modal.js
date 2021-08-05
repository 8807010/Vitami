export default function modal(btn) {
    let modalWindow = document.querySelector('.js-modal-window');
    let closeWindow = document.querySelector('.js-close');

    const classes = {
        openClass: 'is-open'
    }

    btn.addEventListener('click', () => {
        modalWindow.classList.add(classes.openClass)
    });

    closeWindow.addEventListener('click', () => {
        if (modalWindow.classList.contains(classes.openClass)) {
            modalWindow.classList.remove(classes.openClass)
        }
    });

    window.addEventListener('resize', () => {
        if (modalWindow.classList.contains(classes.openClass)) {
            modalWindow.classList.remove(classes.openClass)
        }
    })

    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 27) modalWindow.style.cssText = 'display: none';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalWindow.style.cssText = 'display: none';
        }
    });
}