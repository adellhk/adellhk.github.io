$(document).ready(function() {
  // // minimize all divs on load
  // $('div.content div.about, div.content div.portfolio, div.content div.resume, div.content div.blog').slideUp();

  // bring scroll to top on load.
  $('html, body').animate({
    scrollTop: 0
  });

  $(window).scroll(function(){
    $verticalPosition = $(document).scrollTop();
    if($verticalPosition === 0){
      $('div.header').slideDown(250)
    } else if ($verticalPosition != 0 ){
      if (!$('div.header-listener').is(':hover')){
        $('div.header').slideUp(250)
      }
    }
  });

  $('div.header-listener').hover(function() {
    $('div.header').slideDown(250)
  }, function() {
    if ($verticalPosition != 0) {
      $('div.header').slideUp(250)
    }
  });

  function bindNavListeners(navButton, target) {
    navButton.click(function(){
        // content.slideDown();
      $('html, body').animate({
        scrollTop: target.offset()['top']
      });
    });
  };

  bindNavListeners($('#aboutNav'), $('div.about'), $('div.content div.about'));
  bindNavListeners($('#portfolioNav'), $('div.portfolio'), $('div.content div.portfolio'));
  bindNavListeners($('#resumeNav'), $('div.resume'), $('div.content div.resume'));
  // bindNavListeners($('#blogNav'), $('div.blog'), $('div.content div.blog'));

  // $('div.content button.about').click(function() { $('div.content div.about').slideToggle('fast'); });
  // $('div.content button.portfolio').click(function() { $('div.content div.portfolio').slideToggle('fast'); });
  // $('div.content button.resume').click(function() { $('div.content div.resume').slideToggle('fast'); });


});
