const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let titel_text = new draw_text(canvas_width/2, 50, "Reflecting Line",50);

let A, B, C, v, l, m, va, vb;




SetUp();

function SetUp()
{
    A = new Point(canvas_width / 4, canvas_height / 4, 15, "red");
    B = new Point(3 * canvas_width / 4, 2 * canvas_height / 4, 15, "green");
    C = new Point(canvas_width / 4, 3 * canvas_height / 4, 15, "blue");

    A.drag(); B.drag(); C.drag();

    v = new Vector2d(B.x - A.x, B.y - A.y);
    l = new CalculateLinear(1, 0);
    m = new CalculateLinear(1, 0);

    va = new Vector2d(1,1);
    vb = new Vector2d(1,1);

    Update();
}

function Update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(Update);

    l.letTwoPointsDefineLine(A, C);
    m.slope = -1 / l.slope;
    m.intercept = A.y - m.slope * A.x;

    v.dx = B.x - A.x;
    v.dy = B.y - A.y;

    va.dx = C.x - A.x; va.dy = C.y - A.y;
    vb.dx = -va.dy; vb.dy = va.dx;

    va.magnitude = 1;
    vb.magnitude = 1;

    va.magnitude = v.Dot(va);
    vb.magnitude = v.Dot(vb);

    A.draw(context,"Punt: A", true);
    B.draw(context,"Punt: B", true);
    C.draw(context,"Punt: C", true);

    v.DrawArrow(A.x, A.y);
    l.draw(context);
    m.draw(context);

    va.DrawArrow(A.x, A.y);
    vb.DrawArrow(A.x, A.y);

}



function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}
