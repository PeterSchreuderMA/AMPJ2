//import Vector2D from "../../lib/Vector2d.js";


var dropbox = document.getElementById('drop');
dropbox.addEventListener('drop', drop, false);



const canvas = document.getElementById('canvas');

const _numCellsX = document.getElementById('numCellsX');
const _numCellsY = document.getElementById('numCellsY');

const _loadSheet = document.getElementById('loadSheet');

const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let deltaTime, startTime, currentTime, frameRate;
let sx,sy,sw,sh,counter,counterStart;//Source Width
let numCells, numRows, numCellsX, numCellsY;
let sheetW, sheetH;

let canLoad = true;



let spriteIndex = new Image(); // Using optional size for image
// Load an image of intrinsic size 300x227 in CSS pixels
spriteIndex.src = "Assets/SpriteSheetDog.jpg";
spriteIndex.addEventListener("load", function()
{

    //if (_numCellsX != 0 && _numCellsX != 0)
    setUp();
});
function ImageAvailable()
{
    if (canLoad)
    {

    }
}

function setUp()
{
    startTime = new Date();
    frameRate = 10;

    //Sprite theet
    numCellsX = 8; //Number of sprite along the X
    numCellsY = 10; //Number of sprite along the Y

    sheetW = spriteIndex.naturalWidth;
    sheetH = spriteIndex.naturalHeight;

    sw = (sheetW / numCellsX);
    sh = (sheetH / numCellsY);

    numCells = (numCellsX * numCellsY) - 1 - 8;
    numRows = numCellsX;

    counterStart = 8;
    counter = counterStart;

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
        context.drawImage(spriteIndex, 0, 0, sheetW, sheetH, 0, 0, sheetW, sheetH);

        context.fillStyle = 'rgba(225,0,0,0.5)';
        //Selected sprite in sheet
        context.fillRect(sx, sy, sw, sh);


        //Sprite
        context.drawImage(spriteIndex, sx, sy, sw, sh, sheetW + 50, 50, 1000, 1000);

        startTime = new Date();
        counter++;
        console.log(_loadSheet);
        //Dont let the counter go beyond the number of cells
        if (counter > numCells)
            counter = counterStart;

    }
}


function drop(evt)
{
    evt.stopPropagation();
    evt.preventDefault();
    var imageUrl = evt.dataTransfer.getData('text/html');

    var rex = /src="?([^"\s]+)"?\s*/;
    var url, res;

    url = rex.exec(imageUrl);
    alert(url[1]);
}

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