$(document).ready(function() {
   $(function() {
        $('.lazy').Lazy();
    });

   $('.colapse-nav img').on('click', function() {
    $(this).next().fadeToggle('slow', function() {
      if($('.int .flex-col').is(':visible')) {
        if($(this).attr('data-nav') == 'starry') {
          $('.colapse-nav .starry').attr('src', 'images/StarryEyedHeader_open.jpg');
        } else if($(this).attr('data-nav') == 'hotel') {
          $('.colapse-nav .hotel').attr('src', 'images/HotelBisousHeader_open.jpg');
        }
      } else if($('.int .flex-col').is(':hidden')){
        if($(this).attr('data-nav') == 'hotel') {
          $('.colapse-nav .hotel ').attr('src', 'images/HotelBisousHeader.jpg');
        } else if($(this).attr('data-nav') == 'starry'){
          $('.colapse-nav .starry ').attr('src', 'images/StarryEyedHeader.jpg');
        }
      }
    });
   });
});
