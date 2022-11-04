$(function(){
    // 
    // 
    // 
    $('.main_logo').fadeIn(3000);
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    $('.index-btn').click(function(){
        $('.active').removeClass('active');
        var clickeIndex=$('.index-btn').index($(this));
        $('.slide').eq(clickeIndex).addClass('active');
    });

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    $('a[href^="#"]').click(function(){
          var adjust = -65;
          var speed = 400;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top + adjust;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
    });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
setInterval(()=>{
    $('#ball').css('left',Math.random()*800+'px');
    $('#ball').css('top',Math.random()*800+'px');
},2000);

let point = 0;
$('#ball').click(function(){
    $('.active').removeClass('active');
    var clickeIndex=$('.slide').index($(this));
    $('.slide').eq(clickeIndex).addClass('active');
    // $('.slides').fadeOut(3000);
    $('#ball').fadeOut();   
  });
 
// $('#slids-1').slick({
//     infinite: true,
//     autoplay: true,
//     autoplayspeed:500,
// });

    // 
    // 
    // 
});
