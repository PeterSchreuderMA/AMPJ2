const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Draw The Vector",50);


let kineticObject = [{},{},{},{},{}];

function setUp()
{

  for (let i = 0; i < kineticObject.length; i++)
  {
      kineticObject[i].point = new Point(200,300,20,'#'+(Math.random()*0xFFFFFF<<0).toString(16));
      kineticObject[i].pos = new Vector2d(getRandomNumber(10,canvas_width-10),getRandomNumber(10,canvas_height-10));
      kineticObject[i].vel = new Vector2d(4,0);
      kineticObject[i].acc = new Vector2d(0,0.5);
  }

  update();
}


function update()
{
  context.clearRect(0,0,canvas_width,canvas_height);
  requestAnimationFrame(update);


  for (let i = 0; i < kineticObject.length; i++)
  {
      if (kineticObject[i].pos.dx < (0+kineticObject[i].point.r) || kineticObject[i].pos.dx > (canvas_width-kineticObject[i].point.r))
      {
          kineticObject[i].vel.dx = -kineticObject[i].vel.dx;
      }

      if (kineticObject[i].pos.dy > (canvas_height-kineticObject[i].point.r))
      {
          kineticObject[i].pos.dy = canvas_height-kineticObject[i].point.r;
          kineticObject[i].vel.dy = -kineticObject[i].vel.dy;
      }

      if (kineticObject[i].pos.dy < (0+kineticObject[i].point.r))
      {
          kineticObject[i].pos.dy = 0+kineticObject[i].point.r;
          kineticObject[i].vel.dy = -kineticObject[i].vel.dy;
      }

      kineticObject[i].vel.add(kineticObject[i].acc);
      kineticObject[i].pos.add(kineticObject[i].vel);
      kineticObject[i].point.position(kineticObject[i].pos);
      kineticObject[i].point.draw(context);
      kineticObject[i].vel.DrawArrow(kineticObject[i].pos.dx, kineticObject[i].pos.dy);
  }
    titel_text.draw(context);
}

setUp();

function getRandomNumber(min,max)
{
  //getRandomNumber(10Median&Centroid,canvas_width-10Median&Centroid)
  return Math.random()*(max - min) + min;
}
