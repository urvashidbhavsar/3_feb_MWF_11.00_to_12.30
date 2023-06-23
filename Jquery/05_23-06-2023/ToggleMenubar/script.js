// toggle Menubar
$(document).ready(function () {
    // toggle menu
    $menu = $(".dispMenu");
    $navbar = $(".nav");
    $menu.click(function () {
        $navbar.toggleClass("navbar")
    })

    // page scroll 
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("header-fixed")
        } else {
            $("header").removeClass("header-fixed")
        }
    })

    // for dropdown
    $dispDrop = $(".Create_drop");
    $dropdown = $("#dropmenu");

    $dispDrop.click(function () {
        $dropdown.toggleClass("dropdown")
        // hasClass() => check the class it exist or not
        if ($dropdown.hasClass("dropdownShow") == true) {
            $dropdown.removeClass("dropdownShow")
        } else {
            $dropdown.addClass("dropdownShow")
        }
    })
})