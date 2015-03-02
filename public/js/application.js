$(document).ready(function() {
  // minimize all divs on load
  $('div.content div.about, div.content div.portfolio, div.content div.resume, div.content div.blog').slideUp();
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

  function bindNavListeners(navButton, contentButton, content){
    navButton.click(function(){
        content.slideDown();
      $('html, body').animate({
        scrollTop: contentButton.offset().top-30
      }, 700, function() {
      });
    });
  };

  bindNavListeners($('li#aboutNav'), $('div.content button.about'), $('div.content div.about'));
  bindNavListeners($('li#portfolioNav'), $('div.content button.portfolio'), $('div.content div.portfolio'));
  bindNavListeners($('li#resumeNav'), $('div.content button.resume'), $('div.content div.resume'));
  bindNavListeners($('li#blogNav'), $('div.content button.blog'), $('div.content div.blog'));

  $('div.content button.about').click(function() { $('div.content div.about').slideToggle('fast'); });
  $('div.content button.portfolio').click(function() { $('div.content div.portfolio').slideToggle('fast'); });
  $('div.content button.resume').click(function() { $('div.content div.resume').slideToggle('fast'); });
  $('div.content button.blog').click(function() { $('div.content div.blog').slideToggle('fast'); });
  $('div.resume').load('AdellResumeSpring2015.html')


});
