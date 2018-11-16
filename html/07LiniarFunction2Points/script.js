const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Liniar Function: 2 Points",50);


let A = new Point(100,100,15,"red");
let B = new Point(600,200,15,"blue");
let C = new Point(0,0,15,"yellow");
let D = new Point(0,0,15,"green");

let f = new CalculateLinear(10,100);

console.log(f.calcY())

A.drag();
B.drag();

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    f.letTwoPointsDefineLine(A,B);
    C.x = 0;
    C.y = f.calcY(0);

    D.x = canvas_width;
    D.y = f.calcY(canvas_width);

    f.draw(context,"Punt: F");

    A.draw(context,"Punt: A");
    B.draw(context,"Punt: B");
    C.draw(context,"Punt: C");
    D.draw(context,"Punt: D");

    titel_text.draw(context);
}

update();



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
