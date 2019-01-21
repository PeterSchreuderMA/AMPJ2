const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

centerw = canvas_width/2;
centerh = canvas_height/2;

let clockFace = new Image();
clockFace.src = "face.png";

let clockHand1 = new Image();
clockHand1.src = "hand1.png";

let clockHand2 = new Image();
clockHand2.src = "hand2.png";

let clockHand3 = new Image();
clockHand3.src = "hand3.png";

let titel_text = new draw_text(centerw, 50, "My Clock",50);
let tijdText;

let myDate = new Date();
myDate.getSeconds();
myDate.getMinutes();
myDate.getHours();

let seconds = myDate.getSeconds();
let minutes = myDate.getMinutes();
let hours = myDate.getHours();

clockFace.addEventListener("load", ()=>
{
    update();
})

function update()
{
    myDate = new Date();

    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    seconds = myDate.getSeconds();
    minutes = myDate.getMinutes();
    hours = myDate.getHours();

    DrawClockFace(centerw,centerh);

    DrawClockHandMin(centerw,centerh);

    DrawClockHandSec(centerw,centerh);

    DrawClockHandHour(centerw,centerh);

    DrawTime(seconds, minutes, hours);

    titel_text.draw(context);
}

function DrawClockFace(_x,_y)
{
    var img = clockFace;
    context.save();
    context.translate(_x,_y);
    context.drawImage(img,-0.5*img.width,-0.5*img.height);
    context.restore();
}

function DrawClockHandSec(_x,_y)
{
    let seconds = myDate.getSeconds();

    var img = clockHand1;
    context.save();
    context.translate(_x,_y);
    context.rotate((seconds*2*Math.PI/60)-Math.PI/2);
    context.drawImage(img,-0.05*img.width,-0.5*img.height);
    context.restore();
}


function DrawClockHandMin(_x,_y)
{
    let minutes = myDate.getMinutes();

    var img = clockHand2;
    context.save();
    context.translate(_x,_y);
    context.rotate((minutes*2*Math.PI/60)-Math.PI/2);
    context.drawImage(img,-0.05*img.width,-0.5*img.height);
    context.restore();
}


function DrawClockHandHour(_x,_y)
{
    let hours = myDate.getHours();

    var img = clockHand3;
    context.save();
    context.translate(_x,_y);
    context.rotate((hours*2*Math.PI/60)-Math.PI/2);
    context.drawImage(img,-0.05*img.width,-0.5*img.height);
    context.restore();
}

function DrawTime(_s, _m, _h)
{
    tijdText = new draw_text(centerw, centerh + 330, "Tijd: " + _h + " : " + _m + " : " + _s,50);
    tijdText.draw(context);
}

