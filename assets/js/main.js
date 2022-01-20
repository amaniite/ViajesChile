//Tooltip Boostrap 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function () {
    //Cambiar color amarillo las barras espaciadoras
    $('.barrita').click(function () {
        $(this).css({
            "color": "yellow",
        });
    });

});
