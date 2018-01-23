$(function() {
    'use strict';

    var navbar = $('.navbar');

    $(window).scroll(function() {
      if($(window).scrollTop() >= navbar.height()) {
        if(navbar.hasClass('scrolled')) {
          return 0;
        }else
          navbar.addClass('scrolled navbar-fixed-top');
      }else {
        navbar.removeClass('scrolled navbar-fixed-top');
      }
    });

    //Add Class Selected in link
    $('.tab-switch li').click(function() {
      $(this).addClass('selected').siblings().removeClass('selected');

      //Hide All Divs
      $('.tab-content > div').hide();

      //Show Div Connected With This links
      $('.'+$(this).data('class')).show();
        
    });

    //Add Class Active in liste item

    $('.navbar-inverse .navbar-nav li').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

});
