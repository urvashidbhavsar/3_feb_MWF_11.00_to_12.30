$(document).ready(function () {
    $header = $("#navheader")
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $header.addClass("header-fixed")
        } else {
            $header.removeClass("header-fixed")
        }
    })
})

function FillStartColor(icon) {
    icon.classList.toggle("fillcolor")
}


