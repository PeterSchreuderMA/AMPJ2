const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Multiple Waypoints",50);


let points = [{},{},{},{},{},{},{},{},{}];
let players = [{},{},{},{},{}];

let moveToA = false;

let distance = 0;

function setUp()
{
    //Points
    for (let i = 0; i < points.length; i++)
    {
        points[i].pos = new Vector2d(getRandomNumber(10,canvas_width-10),getRandomNumber(10,canvas_height-10));
        points[i].vel = new Vector2d(0,0);
        points[i].point = new Point(points[i].pos.dx,points[i].pos.dy,20,'#'+(Math.random()*0xFFFFFF<<0).toString(16));
    }

    //Players
    for (let i = 0; i < players.length; i++)
    {
        players[i].pos = new Vector2d(getRandomNumber(10,canvas_width-10),getRandomNumber(10,canvas_height-10));//Random
        //players[i].pos = new Vector2d(points[i].pos.dx,points[i].pos.dy);//On Point
        players[i].vel = new Vector2d(0,0);
        players[i].acc = new Vector2d(0,0);
        players[i].point = new Point(players[i].pos.dx,players[i].pos.dy,20,'#'+(Math.random()*0xFFFFFF<<0).toString(16));
        players[i].currentPoint = i;
    }

    update();
}


function update()
{
  context.clearRect(0,0,canvas_width,canvas_height);
  requestAnimationFrame(update);



    //Points
    for (let i = 0; i < points.length; i++)
    {
        let p2 = i + 1;

        if (i == points.length - 1)
        {
            p2 = 0;
        }

        points[i].pos.add(points[i].vel);
        points[i].point.position(points[i].pos);

        points[i].point.draw(context, "P: " + i, true);


        context.beginPath();
        context.strokeStyle = "gray";
        context.setLineDash([6,10]);
        context.moveTo(points[i].pos.dx,points[i].pos.dy);
        context.lineTo(points[p2].pos.dx,points[p2].pos.dy);
        context.closePath();
        context.stroke();
        context.setLineDash([0]);
    }

    //Players
    for (let i = 0; i < players.length; i++)
    {


        //Set up
        players[i].vel.add(players[i].acc);
        players[i].pos.add(players[i].vel);
        players[i].point.position(players[i].pos);
        players[i].point.draw(context, "SP: " + i, true);


            let p2 = players[i].currentPoint;

            if (players[i].currentPoint == points.length)
            {
                players[i].currentPoint = 0;
            }

            //Move to the points
            distance = players[i].point.distanceToOtherPoint(points[p2].point);

            players[i].vel.differenceVector(points[p2].pos,players[i].pos);

            if(players[i].point.distanceToOtherPoint(points[p2].point)<5)
            {
                players[i].currentPoint++;
            }

            players[i].vel.magnitude = 1/40*(distance + 1);

        players[i].vel.DrawArrow(players[i].pos.dx, players[i].pos.dy);


    }



    titel_text.draw(context);
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