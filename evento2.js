document.addEventListener("mousedown", inicioDibujoMouse);
document.addEventListener("mouseup", finDibujoMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var xi, yi, xf, yf;
var color = "magenta";
var control = false;

function inicioDibujoMouse(evento) {
    control = true;
    xi = evento.offsetX;
    yi = evento.offsetY;
    console.log(evento);
    cuadrito.addEventListener("mousemove", dibujarMouse);
    xf = xi;
    yf = yi;
}

function dibujarMouse(evento) {

    if (control) {
        xi = evento.offsetX;
        yi = evento.offsetY;
        dibujarLinea(color, xi, yi, xf, yf, papel);
        xf = xi;
        yf = yi;
    }
}

function finDibujoMouse(evento) {
    control = false;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}