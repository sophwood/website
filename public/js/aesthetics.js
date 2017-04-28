$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('footer').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('footer').removeClass("sticky");
  }
});
