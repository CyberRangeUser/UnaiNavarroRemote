document.addEventListener("DOMContentLoaded", function () {
    const abrirMenu = document.getElementById("abrir");
    const cerrarMenu = document.getElementById("hamburguesa-cerrar");
    const menuNavegacion = document.querySelector(".menu-navegacion-paginas");
    const menu = document.querySelector(".menu");

    abrirMenu.addEventListener("click", function () {
        menuNavegacion.style.display = "block";
        menu.style.display = "flex";
    });

    cerrarMenu.addEventListener("click", function () {
        menuNavegacion.style.display = "none";
        menu.style.display = "none";
    });

    function checkScreenSize() {
        if (window.innerWidth >= 701) {
            menuNavegacion.removeAttribute("style");
            menu.removeAttribute("style");
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});
