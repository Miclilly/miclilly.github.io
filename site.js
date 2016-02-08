$(document).ready(function() {
  $('.hamburger').on('click', function(){
    console.log("HERe");
    // if menu is close, slide down
    $('.menu').slideToggle();
    //if menu is open, slide up
  })
});
