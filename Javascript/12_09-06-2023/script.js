const submenus = document.querySelectorAll(".submenu");
const inner_submenus = document.querySelectorAll(".inner-submenu");

submenus.forEach(function (submenu) {
    const parentItem = submenu.parentElement;
    parentItem.addEventListener("click", function (e) {
        e.preventDefault();
        submenu.classList.toggle("active");
    });
});

inner_submenus.forEach(function (inner_submenu) {
    const parentItem = inner_submenu.parentElement;
    parentItem.addEventListener("click", function (e) {
        e.preventDefault();
        inner_submenu.classList.toggle("active");
        e.stopPropagation(); // Prevent event propagation to parent elements
        const parentSubmenu = parentItem.closest(".submenu");
        if (!parentSubmenu) {
            parentSubmenu.classList.remove("active");
        }
    });
});