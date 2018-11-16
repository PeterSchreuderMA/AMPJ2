const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"blue");
A.drag(context);

let B = new Point(500,400,20,"yellow");
B.drag(context);

let C = new Point(100,250,20,"green");
C.drag();

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    A.draw(context);
    B.draw(context);
    C.draw(context);
}

animate();




/*const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Draggeble Points",50);


let kineticObject = [{},{},{}];
let objectLines = [{},{},{}];

function setUp()
{
    for (let i = 0; i < 3; i++)
    {
        objectLines[i].line = new LineSegment(0,0,"red");
        objectLines[i].pos1 = new Vector2d(0,0);
        objectLines[i].pos2 = new Vector2d(0,0);
    }

    for (let i = 0; i < kineticObject.length; i++)
    {
        kineticObject[i].point = new Point(200,300,20,"red");
        kineticObject[i].point.pos = new Vector2d(getRandomNumber(20,canvas_width-20),getRandomNumber(20,canvas_height-20));
        kineticObject[i].point.drag();
    }
}

function update()
{
    requestAnimationFrame(update);
    context.clearRect(0,0,canvas_width,canvas_height);


    for (let i = 0; i < kineticObject.length; i++)
    {

        kineticObject[i].point.draw(context);
    }


    for (let i = 0; i < 3; i++)
    {
        let attatch_i = 0;
        if (i==2)
        {
            attatch_i = 0;
        }
        else
        {
            attatch_i = i+1;
        }
        objectLines[i].line.update_pos(kineticObject[i].pos.dx,kineticObject[i].pos,kineticObject[attatch_i].pos);
        objectLines[i].line.draw(context);
    }

    titel_text.draw(context,"",true);
}

update();


function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}

/*document.addEventListener('mousedown',(evt)=>
{
    let mousePos = {};
    mousePos.x = evt.clientX;
    mousePos.y = evt.clientY;

    if (myPoint.distanceToOtherPoint(mousePos) < myPoint.r)
    {
        myPoint.drag();
    }

})*/


