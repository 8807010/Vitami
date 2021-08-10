export default function accordion(btn) {

    let openedAccord = null;

    const classes = {
        openClass: 'is-open'
    }

    btn.addEventListener('click', () => {
        if (openedAccord) {
            openedAccord.classList.remove(classes.openClass)
        }

        if (btn.classList.contains(classes.openClass)) {
            btn.classList.remove(classes.openClass)
        } else {
            btn.classList.add(classes.openClass)
            openedAccord = btn;
        }
    })
}