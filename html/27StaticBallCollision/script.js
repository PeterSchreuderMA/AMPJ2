const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Reflecting Line", 50);

let A, B, v, l, m, va, vb;


function SetUp()
{
    A = {}; B = {};
    A.point = new Point(50, 50, 50, "red");
    A.point.pointColor = "yellow";
    A.pos = new Vector2d(50, 50);
    A.vel = new Vector2d(5, 5);
    A.acc = new Vector2d(0, 5);
    A.rad = new Vector2d(1, 1);
    A.tan = new Vector2d(1, -1);

    B.point = new Point(200, 200, canvas_height / 3, "gray");
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

    B.point.draw(context, "Punt: B", true);

    A.point.draw(context, "Punt: A", true);
    A.vel.DrawArrow(A.pos.dx, A.pos.dy);
    A.rad.DrawArrow(A.pos.dx, A.pos.dy);



}

SetUp();

function getRandomNumber(min, max)
{
    return Math.random() * (max - min) + min;
}


function PlayerCollision(_point, _other)
{
    let _pr = _point.point.r;
    let _por = _other.point.r;

    _point.rad.differenceVector(_other.pos, _point.pos);

    let _dis_between_mag = _point.rad.magnitude;
    console.log(_dis_between_mag)

    //- Horizontal
    if (_point.pos.dx < _pr || _point.pos.dx > canvas_width - _pr)
        _point.vel.dx = -_point.vel.dx;

    //- Vertical
    if (_point.pos.dy < _pr || _point.pos.dy > canvas_height - _pr)
        _point.vel.dy = -_point.vel.dy;


    if (_dis_between_mag <= _por + _pr)
    {

        _point.rad.r = 1;

        _point.tan.dx = -_point.rad.dy;
        _point.tan.dy = _point.rad.dx;

        _point.tan.r = 1;

        _point.rad.r = _point.rad.Dot(_point.vel);
        _point.tan.r = _point.tan.Dot(_point.vel);

        //Draai de radiele componenten om
        _point.rad.angle += Math.PI;

        //Tel tangieel & radieel bij elkaar op voor nieuwe snelheid
        _point.vel.SumVector(_point.rad, _point.tan);


        /*
        _point.vel.dx = -_point.vel.dx;
        _point.vel.dy = -_point.vel.dy;
         */

        if (_point.point.pointColor != "green")
            _point.point.pointColor = "green";
        else
            _point.point.pointColor = "red";
    }
}