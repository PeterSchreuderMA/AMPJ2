const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Liniar Function: 3 Points",50);


let A = new Point(canvas_width/2,-100+canvas_height/2,15,"red");
let B = new Point(-100+canvas_width/2,100+canvas_height/2,15,"blue");
let C = new Point(100+canvas_width/2,100+canvas_height/2,15,"yellow");

let f1 = new CalculateLinear(10,100);
let f2 = new CalculateLinear(10,100);
let f3 = new CalculateLinear(10,100);

//console.log(f.calcY())

A.drag();
B.drag();
C.drag();

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    f1.letTwoPointsDefineLine(A,B);
    f2.letTwoPointsDefineLine(B,C);
    f3.letTwoPointsDefineLine(C,A);


    f1.draw(context,"Punt: F1");
    f2.draw(context,"Punt: F2");
    f3.draw(context,"Punt: F3");

    A.draw(context,"Punt: A");
    B.draw(context,"Punt: B");
    C.draw(context,"Punt: C");

    titel_text.draw(context);
}

update();



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
