export default function header(header) {
  const classes = {
    submenuOpen: "is-open",
  };
  const selectors = {
    submenu: "js-submenu",
    submenuList: "js-submenu-list",
    submenuBtn: "js-submenu-btn",
  };

  const model = {
    submenu: header.querySelectorAll(`.${selectors.submenu}`),
  };

  const state = {
    openedSubItem: null,
  };

  model.submenu.forEach((item) => {
    const submenuToggler = item.querySelector(`.${selectors.submenuBtn}`);
    submenuToggler.addEventListener("click", () => {
      if (state.openedSubItem !== null && state.openedSubItem !== item) {
        closeSubmenu(state.openedSubItem);
      }
      handleSubmenuTogglerClick(item);
    });
  });

  function handleSubmenuTogglerClick(submenu) {
    if (submenu.classList.contains(classes.submenuOpen)) {
      closeSubmenu(submenu);
    } else {
      submenu.classList.add(classes.submenuOpen);
      state.openedSubItem = submenu;
    }
  }

  function closeSubmenu(submenu) {
    submenu.classList.remove(classes.submenuOpen);
    state.openedSubItem = null;
  }
}
