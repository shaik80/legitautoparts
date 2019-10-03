// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    var element = document.getElementById("myBtn");
    element.classList.add("flip");

  } else {
    document.getElementById("myBtn").style.display = "none";
  }
      
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    if(window.scrollY!=0)
    {
        setTimeout(function() {
           window.scrollTo(0,window.scrollY-70);
           topFunction();
        }, 40);
       }
}

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:40,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
  });





