$(document).ready(function() {
    $(".tabsSwitch").click(function() {
        $(".active-tabs").removeClass("active-tabs");
        $(this).addClass('active-tabs');

    });
});