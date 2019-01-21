const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let deltaTime, startTime, currentTime, frameRate;
let sx,sy,sw,sh,counter;
let numCells, numRows;

function setUp()
{
    startTime = new Date();
    frameRate = 60;

    sw = 100;
    sh = 100;
    counter = 0;
    numCells = 20;
    numRows = 5;

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
        context.fillRect(sx, sy, sw, sh);

        startTime = new Date();
        counter++;

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