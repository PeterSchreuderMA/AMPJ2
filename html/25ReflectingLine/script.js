const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Reflecting Line",50);

let A, B, D, Line, Line2, player, I, J;




SetUp();

function SetUp()
{
    A = new Point(canvas_width / 4, canvas_height / 4, 15, "red");
    B = new Point(3 * canvas_width / 4, 3 * canvas_height / 4, 15, "blue");
    D = new Point(0, 0, 10, "White");
    Line = new CalculateLinear(10,100);
    Line2 = new CalculateLinear(10,100);

    I = new Vector2d(1,1);
    J = new Vector2d(1,1);

    A.drag();
    B.drag();
    console.log(Line.calcY());

    player = {};
    player.position = new Vector2d(200, 400);
    player.velocity = new Vector2d(10, 12);
    player.point = new Point(player.position.dx, player.position.dy, 30, "red");

    Update();
}

function Update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(Update);

    Line.letTwoPointsDefineLine(A,B);
    Line.draw(context,"Punt: F");

    A.draw(context,"Punt: A");
    B.draw(context,"Punt: B");

    player.position.add(player.velocity);
    player.point.position(player.position);
    PlayerCollision();
    player.velocity.DrawArrow(player.position.dx, player.position.dy);//draw(context, player.position.dx, player.position.dy, 30);
    player.point.draw(context);


    D.x = Line.intersection(Line2).x;
    D.y = Line.intersection(Line2).y;

    Line2.slope = -1 / Line.slope;
    Line2.intercept = player.position.dy - player.position.dx * Line2.slope;


    Line2.draw(context,"gray");//line

    D.draw(context);

    I.dx = 1;
    I.dy = Line.slope;
    I.magnitude = 1;
    I.magnitude = player.velocity.Dot(I);

    J.dx = 1;
    J.dy = Line2.slope;
    J.magnitude = 1;
    J.magnitude = player.velocity.Dot(J);

    I.velocity.DrawArrow(player.position.dx, player.position.dy);
    J.velocity.DrawArrow(player.position.dx, player.position.dy);

    titel_text.draw(context);
}

function PlayerCollision()
{
    if (player.position.dx < player.point.r || player.position.dx > canvas_width - player.point.r)
        player.velocity.dx = -player.velocity.dx;

    if (player.position.dy < player.point.r || player.position.dy > canvas_height - player.point.r)
        player.velocity.dy = -player.velocity.dy;


    if (player.point.distanceToOtherPoint(D) < player.point.r)
    {
        J.angle += Math.PI;
        player.velocity.SumVector(I, J);
    }
}

/*
if (player.position.dx < D.position.dx || player.position.dx > D.position.dx)
        player.velocity.dx = -player.velocity.dx;

    if (player.position.dy < D.position.dy || player.position.dy > D.position.dy)
        player.velocity.dy = -player.velocity.dy;
 */


function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
