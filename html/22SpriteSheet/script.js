const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let deltaTime, startTime, currentTime, frameRate;
let sx,sy,sw,sh,counter;//Source Width
let numCells, numRows;



let spriteIndex = new Image(60, 45); // Using optional size for image
// Load an image of intrinsic size 300x227 in CSS pixels
spriteIndex.src = "Assets/SpriteSheet.jpg";

function setUp()
{
    startTime = new Date();
    frameRate = 30;

    sw = 1000 / 4;
    sh = 615 / 3;
    counter = 0;
    numCells = 12 - 1;
    numRows = 4;

    update();
}


function update()
{
    requestAnimationFrame(update);

    //Current time
    currentTime = new Date();
    deltaTime = currentTime - startTime;

    //If the deltatime is bigger then
    if (deltaTime > 1000 / frameRate)
    {
        context.clearRect(0, 0, canvas_width, canvas_height);
        sx = counter % numRows * sw;
        sy = Math.floor(counter / numRows) * sh;

        //Draw the sheet as an example
        context.drawImage(spriteIndex, 0, 0, 1000, 615, 0, 0, 1000, 615);

        context.fillStyle = 'rgba(225,0,0,0.5)';
        //Selected sprite in sheet
        context.fillRect(sx, sy, sw, sh);


        //Sprite
        context.drawImage(spriteIndex, sx, sy + 50, sw, sh - 50, 1200, 100, 500, 500);

        startTime = new Date();
        counter++;

        //Dont let the counter go beyond the number of cells
        if (counter > numCells)
            counter = 0;

    }
}



setUp();

function getRandomNumber(min,max)
{
  //getRandomNumber(10Median&Centroid,canvas_width-10Median&Centroid)
  return Math.random()*(max - min) + min;
}


// else
// {
//     distance = players[i].point.distanceToOtherPoint(points[p2].point);
//
//     players[i].vel.differenceVector(points[p2].pos, players[i].pos);
//
//     if (players[i].point.distanceToOtherPoint(points[p2].point)<1)
//     {
//         moveToA = true;
//     }
// }