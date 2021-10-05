var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var lastpositionofx, lastpositionofy;
var mouseEvent = ""
var raduis = 10
color = "red"
width = 1
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofmousex = e.clientX - canvas.offsetLeft
    currentpositionofmousey = e.clientY - canvas.offsetTop;
    if (mouseEvent=="mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width;

        ctx.moveTo(lastpositionofx, lastpositionofy)
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey)
        ctx.arc(currentpositionofmousex, currentpositionofmousey, radius, 0, 2 * Math.PI)
        ctx.stroke();
        console.log("lastx = "+lastpositionofx, "lasty = "+lastpositionofy)
        console.log("currentpositionofx = "+currentpositionofmousex, "currentpositionofy = "+currentpositionofmousey)
    }
    lastpositionofx = currentpositionofmousex;
    lastpositionofy = currentpositionofmousey;
}
canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
    mouseEvent = "mouseleave"
}

function cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}
