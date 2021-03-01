$(function(){
    $('.items a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
    $('#title-btn').click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });
    $('.about, .skills, .service, .work, .contact').fadeIn(2000);
});