const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;


let kineticObjects = [];

for (let i = 0; i < 10; i++)
{
    let kineticObject = {};
    kineticObject.point = new Point(getRandomNumber(20,canvas_width-20),100,20,"red");
    kineticObject.pos = new Vector2d(400,100);
    kineticObject.vel = new Vector2d(0,2);
    kineticObjects.push(kineticObject);
}

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update)

    for (let i = 0; i < kineticObjects.length; i++)
    {
        kineticObjects[i].pos.add(kineticObjects[i].vel);
        kineticObjects[i].point.position(kineticObjects[i].pos);
        kineticObjects[i].point.draw(context);
    }



}

update();

function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}