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
    
    $(window).scroll(function (){
    $('.about, .skills, .service, .work, .contact').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });
    
   var $body = $('body');
   $('#toggle').on('click', function(){
  $body.addClass('is-menu-open');
  return false;
});
$('.menu-close-btn').on('click', function(){
  $body.removeClass('is-menu-open');
  return false;
});
});