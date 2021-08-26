export default function menuMobile(btn) {

    btn.addEventListener('click', (event) => {
        btn.classList.toggle('is-open')

        const classes = {
            openClass: 'is-open'
        }

        if (btn.classList.contains(classes.openClass)) {
            btn.classList.remove(classes.openClass)
        } else {
            btn.classList.add(classes.openClass)
        }
    });
}