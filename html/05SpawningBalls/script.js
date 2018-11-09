const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let myPoints = [];

function setUp()
{
  /*for (var i = 0; i < 10Median&Centroid; i++)
  {
    let myPoint = new Point(getRandomNumber(10Median&Centroid,canvas_width-10Median&Centroid),-20,10Median&Centroid,"red");
    myPoints.push(myPoint);
  }*/
  update();
}


function update()
{
    requestAnimationFrame(update);
    context.clearRect(0,0,canvas_width,canvas_height);

    // myPoint = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height));
    //myPoints.push(myPoint);

    if(Math.random()<0.01)
    {
        addPoint();
    }


    for (let i = 0; i < myPoints.length; i++)
    {
    myPoints[i].y += 4;
    myPoints[i].draw(context);

      if(myPoints[i].y > canvas_height-50)
      {
          myPoints.splice(0,1);
          addPoint();
      }
    }

}

//Mouse detection
document.addEventListener('mousedown',(evt)=>{

    let mousePos = {};
    mousePos.x = evt.clientX;
    mousePos.y = evt.clientY;

    for (let i = 0; i < myPoints.length; i++)
    {
        console.log(myPoints[i]);

        if (myPoints[i].distanceToOtherPoint(mousePos) < myPoints[i].r)
        {
            myPoints.splice(i,1);

        }
    }
});

setUp();



function addPoint()
{
    let myPoint = new Point(getRandomNumber(10,canvas_width-10),-20,50,"red");
    myPoints.push(myPoint);
}



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}