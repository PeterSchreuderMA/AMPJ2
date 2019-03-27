const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Reflecting Line", 50);

let A, B;


function SetUp()
{
    A = {}; B = {};
    A.point = new Point(200, 200, 50, "red");
    A.pos = new Vector2d(canvas_width / 4, canvas_height / 4);
    A.vel = new Vector2d(5, 5);
    A.acc = new Vector2d(0, 5);

    B.point = new Point(200, 200, 70, "gray");
    B.pos = new Vector2d(canvas_width / 2, canvas_height / 2);
    B.vel = new Vector2d(0, 0);
    B.acc = new Vector2d(0, 0);


    Update();
}

function Update()
{
    context.clearRect(0, 0, canvas_width, canvas_height);
    requestAnimationFrame(Update);

    A.pos.add(A.vel);
    A.point.position(A.pos);
    B.point.position(B.pos);

    PlayerCollision(A, B);
    A.point.draw(context, "Punt: A", true);
    B.point.draw(context, "Punt: B", true);

}

SetUp();

function getRandomNumber(min, max)
{
    return Math.random()*(max - min) + min;
}


function PlayerCollision(_point, _other)
{
    let _pr = _point.point.r;

    //- Horizontal
    if (_point.pos.dx < _pr || _point.pos.dx > canvas_width - _pr)
        _point.vel.dx = -_point.vel.dx;

    //- Vertical
    if (_point.pos.dy < _pr || _point.pos.dy > canvas_height - _pr)
        _point.vel.dy = -_point.vel.dy;


    if (_point.point.distanceToOtherPoint(_other) < _pr)
    {
        console.log("asd");
        _point.vel.dx = -_point.vel.dx;
        _point.vel.dy = -_point.vel.dy;
        _point.color("green");
    }
}