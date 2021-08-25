export default function menuMobile(btn) {
    // console.log(btn);


    btn.addEventListener('click', (event) => {
        if (btn.classList.contains('is-open')) {
            btn.classList.remove('is-open')
        } else {
            btn.classList.add('is-open')
        }
    });
}