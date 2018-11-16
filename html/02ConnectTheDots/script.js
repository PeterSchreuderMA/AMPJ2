const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let myPoints = [];

let titel_text = new draw_text(canvas.width/2, 50, "Connect The Dots",50);


function setUp()
{
  for (let i = 0; i <4; i++)
  {
    addPoint();
  }
  update();
}

function update()
{
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba(200,200,200,0.01)";
  context.fillRect(0,0,canvas.width,canvas.height)

  requestAnimationFrame(update);

  if(Math.random()<0.01)
  {
      myPoints.splice(0,1);
      addPoint();
  }

  context.beginPath();
  context.strokeStyle = "gray";
  context.fillStyle="rgba(255,255,0,0.2)";

  context.moveTo(myPoints[0].x,myPoints[0].y);

  for (var i = 0; i < myPoints.length;   i++)
  {
    context.lineTo(myPoints[i].x,myPoints[i].y);
  }
  context.fill();
  context.closePath();
  context.stroke();


  for (var i = 0; i < myPoints.length; i++)
  {
    myPoints[i].draw(context);
  }

  titel_text.draw(context);
}

setUp();

function getRandomNumber(min,max)
{
    //getRandomNumber(10Median&Centroid,canvas_width-10Median&Centroid)
    return Math.random()*(max - min) + min;
}


function addPoint()
{
  let point = new Point(getRandomNumber(10,canvas.width-10),getRandomNumber(10,canvas.height-10),"#" + Math.floor(getRandomNumber(255*255*255)).toString(16));
  myPoints.push(point);
}
