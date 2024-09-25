window.addEventListener('scroll', function(e) {
    document.getElementsByTagName('meta')["theme-color"].content = "#003140";
})  

// Check if the device has touch events
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
  // Add a class to the body to disable hover effects
  document.body.classList.add('no-hover');
}


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed:50,
    typeSpeed:60,
    loop:true,
  });
  var myWave = $('#landingsvg').wavify({
    height: 50,
    bones: 3,
    amplitude: 40,
    color: '#003140',
    speed: .30,
  });
  var myWave = $('#projectsvg').wavify({
    height: 50,
    bones: 4,
    amplitude: 40,
    color: '#171717',
    speed: .30,
  });
  AOS.init();
  $(window).load(function() {
    $('#preloader').css('display',"none");
 });

 $( "#nav-icon" ).click(function() {
  $( "#container" ).fadeOut("slow", function() {
      $( "#small-screen-nav" ).fadeIn( "slow")
      $( "#small-ul" ).fadeIn("slow");
  });
});

$( "#close" ).click(function() {
  $( "#small-screen-nav" ).fadeOut( "slow", function() {
      $( "#small-screen-nav" ).fadeOut( "slow", function() {
         $( "#container" ).fadeIn("slow");
      });
  });

});
 //javascript file


