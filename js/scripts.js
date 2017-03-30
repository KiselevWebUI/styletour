/**
 * Created by avk on 13.09.2016.
 */
$(function(){

  $('.carousel').carousel({
    interval: false
  });

  $('.search').on('click', function(){
    if($('.main-menu .navbar-form').is(':hidden'))$('.main-menu .navbar-form').slideDown();
    else $('.main-menu .navbar-form').slideUp('normal', function(){
      $('.main-menu .navbar-form').css('cssText', '');
    });
  });

alert('test');
alert('test');

  $('#elastislide').elastislide();

});



