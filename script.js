$('document').ready(function () {
    console.log('Let’s get ready to party with jQuery!');
})

$('article img').addClass('image-center');

$('article p').last().remove();

const rando = Math.floor(Math.random()*100);
$('#title').css('font-size', rando);

$('<li>Look: a new item!!</li>').appendTo('ol');

$('aside').children().remove();
$('<p>Sorry about that list</p>').appendTo('aside');


$('#change').on('click', function() {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $('body').css('background-color', `rgb(${red},${green},${blue})`);
})

$('img').on('click', function () {
    $(this).remove();
})

