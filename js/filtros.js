let destacados = $('#destacados').offset().top,
    cursos = $('#cursos').offset().top,
    contacto = $('#contacto').offset().top;


window.addEventListener('resize', function () {
    let destacados = $('#destacados').offset().top,
    cursos = $('#cursos').offset().top,
    contacto = $('#contacto').offset().top;
});

$('#enlace-inicio').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

$('#enlace-destacados').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: destacados - 100
    }, 600);
});

$('#enlace-cursos').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: cursos - 100
    }, 600);
});

// $('#enlace-trabajo').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: trabajo - 100
//     }, 600);
// });

$('#enlace-contacto').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: contacto - 100
    }, 600);
});