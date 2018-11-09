const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;


let A = new Point(canvas_width/2,-100+canvas_height/2,15,"red");
let B = new Point(-100+canvas_width/2,100+canvas_height/2,15,"blue");
let C = new Point(100+canvas_width/2,100+canvas_height/2,15,"yellow");

let Q = new Point(canvas_width/2,canvas_height/2,15,"purple");

let l = new CalculateLinear(1,1);
let m = new CalculateLinear(1,1);

let S1 = new Point(0,0,10,"White");
let S2 = new Point(0,0,10,"White");
let S3 = new Point(0,0,10,"White");

let f1 = new CalculateLinear(10,100);
let f2 = new CalculateLinear(10,100);
let f3 = new CalculateLinear(10,100);

let m1 = new CalculateLinear(10,100);
let m2 = new CalculateLinear(10,100);
let m3 = new CalculateLinear(10,100);

//let new_text = new draw_text(canvas_width/2, -200+canvas_height/2, "Shadow and Outline Text test",50);


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

    S1.x = (A.x + B.x)/2;
    S1.y = (A.y + B.y)/2;

    S2.x = (B.x + C.x)/2;
    S2.y = (B.y + C.y)/2;

    S3.x = (C.x + A.x)/2;
    S3.y = (C.y + A.y)/2;

    Q.x = m1.intersection(m2).x;
    Q.y = m1.intersection(m2).y;

    m1.letTwoPointsDefineLine(A,S2);
    m2.letTwoPointsDefineLine(B,S3);
    m3.letTwoPointsDefineLine(C,S1);


    f1.draw(context);//line
    f2.draw(context);
    f3.draw(context);

    m1.draw(context,"gray");//line
    m2.draw(context,"gray");
    m3.draw(context,"gray");

    A.draw(context,"Punt: A");
    B.draw(context,"Punt: B");
    C.draw(context,"Punt: C");

    Q.draw(context,"Punt: Q");

    S1.draw(context,"Punt: S1");
    S2.draw(context,"Punt: S2");
    S3.draw(context,"Punt: S3");

    new_text.draw(context);

}

update();



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
