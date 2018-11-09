const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let kineticObject = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
let objectLines = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];


let myPoints = [];

function setUp()
{
  for (let i = 0; i < objectLines.length; i++)
  {
      /*objectLines[i].line = new LineSegment(0,0,"red");
      objectLines[i].pos1 = new Vector2d(0,0);
      objectLines[i].pos2 = new Vector2d(0,0);*/
  }

    //lineSegment = new LineSegment(Vector2d(100,100),Vector2d(200,200),"red");

  for (let i = 0; i < kineticObject.length; i++)
  {
      kineticObject[i].point = new Point(200,300,20,'#'+(Math.random()*0xFFFFFF<<0).toString(16));
      kineticObject[i].pos = new Vector2d(getRandomNumber(10,canvas_width-10),getRandomNumber(10,canvas_height-10));
      kineticObject[i].vel = new Vector2d(getRandomNumber(0.1,1),getRandomNumber(0.1,1));
      kineticObject[i].acc = new Vector2d(0,getRandomNumber(0.1,1));
  }

  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);

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
  }

    /*for (let i = 0; i < objectLines.length; i++)
    {
        let attatch_i = 0;
        if (i==objectLines.length)
        {
            attatch_i = 0;
        }
        else
        {
            attatch_i = i+1;
        }
        objectLines[i].line.update_pos(kineticObject[i].pos.dx,kineticObject[i].pos,kineticObject[attatch_i].pos);
        objectLines[i].line.draw(context);
    }*/

    //lineSegment.draw(context);


  //new_text.draw(context);
}

setUp();

function getRandomNumber(min,max)
{
  //getRandomNumber(10Median&Centroid,canvas_width-10Median&Centroid)
  return Math.random()*(max - min) + min;
}
