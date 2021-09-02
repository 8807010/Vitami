export default function headerScroll() {

    let header = document.querySelector(".js-header");

    function addClass() {
        header.classList.add('is-active');
    }

    function deleteClass() {
        header.classList.remove('is-active');
    }

    window.addEventListener('scroll', (event) => {
        window.scrollY > 76 ? addClass() : deleteClass()
        // if (window.scrollY > 100) {
        //     addClass()
        // } else if (window.scrollY === 0) {
        //     deleteClass()
        // }
    });
}