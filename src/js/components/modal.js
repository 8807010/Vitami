export default function modal(btn) {
    let modalWindow = document.querySelector('.js-modal-window');
    let closeWindow = document.querySelector('.js-close');


    btn.addEventListener('click', (event) => {
        modalWindow.style.cssText='display: flex';
    });

    // btn.addEventListener('click', (event) => {
    //     modalWindow.setAttribute('display: flex');
    // });

    closeWindow.addEventListener('click', (event) => {
        modalWindow.style.cssText='display: none';
    });

    window.addEventListener('resize', (event) => {
        modalWindow.style.cssText='display: none'
    })



    document.addEventListener('keypress', (event) => {
        if(event.keyCode === 27) modalWindow.style.cssText='display: none';
    }); 



    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalWindow.style.cssText='display: none';
        }
        });


}