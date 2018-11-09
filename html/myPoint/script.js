const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.x = 500;
canvas.y = 500;

canvas.width = 640;
canvas.height = 480;

canvas_x = canvas.x;
canvas_y = canvas.y;

canvas_width = canvas.width;
canvas_height = canvas.height;

let myPoints = [];
let manyPoints = 6;
let time = 0;
let myText;

function setUp()
{
    let myText = new draw_text(10,10,"BOi");
    for (var i = 0; i < manyPoints; i++)
    {
        let myPoint = new Point(getRandomNumber(10,canvas_width-10),getRandomNumber(10,canvas_height-10),10,"red",1);
        myPoints.push(myPoint);
    }
    update();
}

function update()
{
    requestAnimationFrame(update);

    for (var i = 0; i < myPoints.length; i++)
    {
        if (i == 0)
        {
            if (time == 60)
            {
                time = 0;
                myPoints.splice(0,1);//Killoff the first one
            }
            else
            {
                time++;
            }
        }
        myPoints[i].draw(context);
    }
    context.clearRect(canvas_x,canvas_y,canvas_width,canvas_height);
    myText.draw(context);
}

setUp();

function getRandomNumber(min,max)
{
    ///getRandomNumber(min,max)
    return Math.random()*(max - min) + min;
}