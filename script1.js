$(document).ready(function() {
  setInterval(function() {
    $('.slides').animate({marginLeft: '-100%'}, 800, function() {
      $('.slides').css({marginLeft: 0}).find('.slide:first').appendTo('.slides');
    })
  }, 3000);
});
