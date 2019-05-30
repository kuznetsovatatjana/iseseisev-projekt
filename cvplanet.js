const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //Toggle navbar
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }
        });
    });

}
navSlide();


//CONTACT FORM//

$(document).ready(function(){
    $('.submit').click(function(event){
        console.log("CLICKED");

        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var status = $('.status');
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