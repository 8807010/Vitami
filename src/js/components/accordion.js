export default function accordione(btn) {
    let accordion = document.querySelectorAll('.js-accordion');

    const arrayAcc = [accordion.length];

    arrayAcc.forEach(btn.addEventListener('click', () => {
            if (accordion.classList.contains('is-open')) {
                accordion.classList.add('is-open')
            } else {
                accordion.classList.remove('is-open')
            }
        })

    );


}