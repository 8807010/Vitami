export default function accordion(btn) {

    const classes = {
        openClass: 'is-open'
    }

    btn.addEventListener('click', () => {
        let accord_id = 'accord_' + btn.id
        let accord = document.getElementById(accord_id);
        if (accord.classList.contains(classes.openClass)) {
            accord.classList.remove(classes.openClass)
        } else {
            accord.classList.add(classes.openClass)
        }
    })
}