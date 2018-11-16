const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;


let A = new Point(-100+canvas_width/2,-100+canvas_height/2,15,"red");
let B = new Point(100+canvas_width/2,-100+canvas_height/2,15,"blue");
let C = new Point(-100+canvas_width/2,100+canvas_height/2,15,"yellow");

let S = new Point(0,0,10,"White");

let l = new CalculateLinear(1,1);
let m = new CalculateLinear(1,1);


let titel_text = new draw_text(canvas_width/2, 50, "Perpendicular Line",50);

//console.log(f.calcY())

A.drag();
B.drag();
C.drag();

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    S.x = l.intersection(m).x;
    S.y = l.intersection(m).y;

    l.letTwoPointsDefineLine(A,B);
    m.slope = -1/l.slope;
    m.intercept = C.y - m.slope * C.x;


    l.draw(context,"Punt: L");
    m.draw(context,"Punt: M");

    A.draw(context,"Punt: A");
    B.draw(context,"Punt: B");
    C.draw(context,"Punt: C");

    S.draw(context,"Punt: S");

    //Q.draw(context,"Punt: Q");
    titel_text.draw(context);
}

update();



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
