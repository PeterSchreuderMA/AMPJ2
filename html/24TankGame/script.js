class Tank
{
    constructor(x, y)
    {
        this.sx;
        this.sy;
        this.sw = 32;
        this.sh = 32;
        this.pos = new Vector2d(x, y);
        this.w = 64;
        this.h = 64;

        //Physics
        this.vel = new Vector2d(-1, 1);

        this.spriteSheet = new Image();
        this.spriteSheet.src = "Assets/Tanks_sheet.png";
        this.startFrame = 1;
        this.endFrame = 9;
        this.counter = this.startFrame;

    }

    move()
    {
        this.pos.add(this.vel);

        this.counter ++;

        if (this.counter >= this.endFrame)
        {
            this.counter = this.startFrame;
        }
        this.sx = this.counter % 8 * this.sw;
        this.sy = Math.floor(this.counter / 8) * this.sh;

        if (this.pos.dx < 0)
        {
            this.pos.dx = canvas_width;
        }

        if (this.pos.dx > canvas_width)
        {
            this.pos.dx = 0;
        }

        if (this.pos.dy < 0)
        {
            this.pos.dy = canvas_height;
        }

        if (this.pos.dy > canvas_height)
        {
            this.pos.dy = 0;
        }
    }

    draw()
    {
        context.save();
        context.translate(this.pos.dx, this.pos.dy);
        context.rotate(this.vel.angle + Math.PI / 2);
        context.drawImage(this.spriteSheet, this.sx, this.sy, this.sw, this.sh, -this.sw * 0.5, -this.sh * 0.5, 64, 64);
        context.restore();


    }
}

class Projectile
{
    constructor(x, y)
    {
        this.pos = new Vector2d(x, y);
        this.spriteSheet = new Image();
        this.spriteSheet.src = "Assets/Tanks_sheet.png";
    }

    draw()
    {
        let sx = (21 % 8) * 32;
        let sy = Math.floor(21 / 8) * 32;

        context.drawImage(this.spriteSheet, sx, sy, 32, 32, this.pos.dx, this.pos.dy, 64, 64);
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let startTime, currentTime, deltaTime, fps;
let _kInput;

let greenTank;

let projectiles = [];

let turnSpeed;

function setUp()
{
    startTime = new Date();
    fps = 60;
    _kInput = new kInput();
    greenTank = new Tank(canvas_width / 2, canvas_height / 2);

    turnSpeed = 0.1;


    update();
}

document.addEventListener('keydown', function(input)
{
    _kInput.updateInput(input);
});

function update()
{
    requestAnimationFrame(update);
    context.clearRect(0, 0, canvas_width, canvas_height);

    currentTime = new Date();
    deltaTime = (currentTime - startTime) / 1000;
    if (deltaTime > 1 / fps)
    {
        startTime = new Date();


        greenTank.vel.angle += turnSpeed * _kInput.horizontal;
        console.log(_kInput.horizontal);

        greenTank.move();




    }

    //Shooting
    if (_kInput.v_button_a)
    {
        let _projectile = new Projectile(greenTank.pos.dx, greenTank.pos.dy);

        projectiles.push(_projectile);
    }


    // - Draw Event -
    for (let i = 0; i < projectiles.length; i++)
    {
        projectiles[i].draw();
    }

    greenTank.draw();
}

setUp();