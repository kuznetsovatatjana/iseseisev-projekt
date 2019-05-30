//CANVAS//
window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const clearAll = document.querySelector(".clean");
    const ctx = canvas.getContext("2d");
    //COLORS
    const pink = document.querySelector(".pink");
    const red = document.querySelector(".red");
    const orange = document.querySelector(".orange");
    const yellow = document.querySelector(".yellow");
    const green = document.querySelector(".green");
    const blue = document.querySelector(".blue");
    const indigo = document.querySelector(".indigo");
    const violet = document.querySelector(".violet");
    const white = document.querySelector(".white");
    const black = document.querySelector(".black");

    //variables
    let painting = false;
    let customLineWidth = document.querySelector("#linewidth");
    let download = document.getElementById("download");
    //functions
    function startPosition(e){
        painting = true;
        draw();
    }
    function endPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = customLineWidth.value;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    function clearCanvas(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }
    function downloadImage(){
        let image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
    }
    //COLOR BUTTONS
    function pinkCol(){
        ctx.strokeStyle = pink.value;
    }
    function redCol(){
        ctx.strokeStyle = red.value;
    }
    function orangeCol(){
        ctx.strokeStyle = orange.value;
    }
    function yellowCol(){
        ctx.strokeStyle = yellow.value;
    }
    function greenCol(){
        ctx.strokeStyle = green.value;
    }
    function blueCol(){
        ctx.strokeStyle = blue.value;
    }
    function indigoCol(){
        ctx.strokeStyle = indigo.value;
    }
    function violetCol(){
        ctx.strokeStyle = violet.value;
    }
    function whiteCol(){
        ctx.strokeStyle = white.value;
    }
    function blackCol(){
        ctx.strokeStyle = black.value;
    }
    //eventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    clearAll.addEventListener('click', clearCanvas);
    pink.addEventListener('click', pinkCol);
    red.addEventListener('click', redCol);
    orange.addEventListener('click', orangeCol);
    yellow.addEventListener('click', yellowCol);
    green.addEventListener('click', greenCol);
    blue.addEventListener('click', blueCol);
    indigo.addEventListener('click', indigoCol);
    violet.addEventListener('click', violetCol);
    white.addEventListener('click', whiteCol);
    black.addEventListener('click', blackCol);
    download.addEventListener('click', downloadImage);
});

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