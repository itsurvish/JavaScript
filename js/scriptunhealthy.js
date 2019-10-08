var plusSlides;
var currentSlide;
var showSlides;
$(document).ready(function() {
    var slideIndex=1;
    // Next/previous controls
plusSlides=function(n){
  showSlides(slideIndex += n);
}

// Thumbnail image controls
currentSlide=function(n){
  showSlides(slideIndex = n);
}

showSlides=function(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);


});