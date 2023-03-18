window.onload = init;

function init(){
    var canvas = document.getElementById("testCanvas");
    var context = canvas.getContext("2d");
    var gradient = context.createRadialGradient(100,100,100,100,100,0);
    gradient.addColorStop(0,'red');
    gradient.addColorStop(0.2,'blue');
    gradient.addColorStop(0.4,'red');
    gradient.addColorStop(0.6,'blue');
    gradient.addColorStop(0.8,'red');
    gradient.addColorStop(1,'blue');
    context.fillStyle = gradient;

    context.beginPath();
    context.arc(100,100,100,0,2 * Math.PI);
    context.fill();
    context.closePath();
}