export default function accordion(btn) {
    
    btn.addEventListener('click', () => {
        if (btn.classList.contains('is-open')) {
            btn.classList.remove('is-open')
        } else {
            btn.classList.add('is-open')
        }
    })
}