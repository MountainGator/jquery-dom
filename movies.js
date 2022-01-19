$('#submit').on('click', function (e) {
e.preventDefault();
let $title = $('#title').val();
let $rating = $('#rating').val();

if($title.length >= 2){
    if($rating <= 10 && $rating >= 0){
        const text = `Title: ${$title}, Rating: ${$rating}`;
        $(`<p>${text}</p>`).appendTo('#container');
    } else { alert('please enter a rating between 0 and 10')}
    } else { alert('please enter a title longer than 2 characters')}
})

$('#remove').on('click', function (e) {
    e.preventDefault();
    $('p').last().remove();
})