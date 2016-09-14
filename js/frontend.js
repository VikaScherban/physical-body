$(document).ready(function(event) {
    $("#town-select").change(function (event) {
        $("#town-select-value").html($(this).val());
    });

    $(".mobile-side-bar").click(function(event){
        $(".side-bar").toggleClass("side-bar_visible");
    });

    $(".fancybox").fancybox();
});