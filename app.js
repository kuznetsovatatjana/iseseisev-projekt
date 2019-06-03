//Accordion//

let title = document.getElementsByClassName('accordion-title');

for (let i = 0; i < title.length; i++) {
     title[i].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for(let i = 0; i < title.length; i++) {
                 title[i].classList.remove('active');
             }
            this.classList.add('active'); 
        }
    });
}

//Slider//

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//CONTACT FORM//

$(document).ready(function(){
    $('.submit').click(function(event){
        console.log("CLICKED");

        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        let status = $('.status');
        status.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            console.log("<div>email is valid</div>");
        } else {
            event.preventDefault();
            status.append("<div>email is not valid</div>");
        }

        if(subject.length > 5){
            console.log("<div>subject is valid</div>");
        } else {
            event.preventDefault();
            status.append("<div>subject is not valid</div>");
        }

        if(message.length > 15){
            console.log("<div>message is valid</div>");
        } else {
            event.preventDefault();
            status.append("<div>message is not valid</div>");
        }
    });
});

//Timer//

window.onload = window.setTimeout("getSecs()", 1);
startday = new Date();
clockStart = startday.getTime();

function initStopwatch() {
  let myTime = new Date();
  let timeNow = myTime.getTime();
  let timeDiff = timeNow - clockStart;
  this.diffSecs = timeDiff / 1000;
  return this.diffSecs;
}

function getSecs() {
  var mySecs = initStopwatch();
  var mySecs1 = "" + mySecs;
  mySecs1 = mySecs1.substring(0, mySecs1.indexOf(".")) + " seconds";
  document.getElementById("custom-timer").innerHTML = mySecs1;
  window.setTimeout("getSecs()", 1000);
}