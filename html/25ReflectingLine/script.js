const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Reflecting Line",50);

let A, B, Line, player;


SetUp();

function SetUp()
{
    A = new Point(100,100,15,"red");
    B = new Point(600,200,15,"blue");
    Line = new CalculateLinear(10,100);

    A.drag();
    B.drag();
    console.log(Line.calcY());

    player = {};
    player.position = new Vector2d(400, 400);
    player.velocity = new Vector2d(3, 4);
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

    player.point.position(player.position);
    PlayerCollision();
    player.velocity.draw(context, player.position.dx, player.position.dy, 30);
    player.point.draw(context);

    titel_text.draw(context);
}

function PlayerCollision()
{
    if (player.position.dx < player.point.r || player.position.dx > canvas_width - player.point.r)
        player.velocity.dx = -player.velocity.dx;

    if (player.position.dy < player.point.r || player.position.dy > canvas_height - player.point.r)
        player.velocity.dy = -player.velocity.dy;
}




function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
