$(document).ready(function() {
   $(function() {
        $('.lazy').Lazy();
    });

  // nav stuff
  /* Open when someone clicks on the span element */
  $('.open').on('click', function() {
    if($(window).width() > 768) {
      $("#myNav").css('width', '50%');
    } else {
      $("#myNav").css('width', '100%');
    }
    if( $('#myNav').is(':visible') ) {
      $('span.open').hide();
    }
  })
  /* Close when someone clicks on the "x" symbol inside the overlay */
  $('.closebtn').on('click', function() {
    $("#myNav").css('width', '0%');
    $('span.open').show();
  });

   $('.colapse-nav img').on('click', function() {
    $(this).next().fadeToggle('slow', function() {
      if($('.int .flex-col').is(':visible')) {
        if($(this).attr('data-nav') == 'starry') {
          $('.colapse-nav .starry').attr('src', 'images/StarryEyedHeader_open.jpg');
        } else if($(this).attr('data-nav') == 'hotel') {
          $('.colapse-nav .hotel').attr('src', 'images/HotelBisousHeader_open.jpg');
        } else if($(this).attr('data-nav') == 'marigold') {
          $('.colapse-nav .marigold').attr('src', 'images/Marigold_minus.jpg');
        }
      } else if($('.int .flex-col').is(':hidden')){
        if($(this).attr('data-nav') == 'hotel') {
          $('.colapse-nav .hotel ').attr('src', 'images/HotelBisousHeader.jpg');
        } else if($(this).attr('data-nav') == 'starry'){
          $('.colapse-nav .starry ').attr('src', 'images/StarryEyedHeader.jpg');
        } else if($(this).attr('data-nav') == 'marigold'){
          $('.colapse-nav .marigold ').attr('src', 'images/Marigold_plus.jpg');
        }
      }
    });
   });
});
