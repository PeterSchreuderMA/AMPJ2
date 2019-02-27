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
        this.vel = new Vector2d(0, 0);
        this.spriteSheet = new Image();
        this.spriteSheet.src = "Assets/Tanks_sheet.png";
    }

    update()
    {
        this.pos.add(this.vel);
    }

    draw()
    {
        let sx = (21 % 8) * 32;
        let sy = Math.floor(21 / 8) * 32;

        context.save();
        context.translate(this.pos.dx, this.pos.dy);

        context.drawImage(this.spriteSheet,sx,sy,32,31,-32,-32,64,64);
        context.restore();
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

let groundSprite = new Image();
groundSprite.src = "Assets/Tanks_sheet.png";

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

// - Input Update -
document.addEventListener('keydown', function(input)
{
    _kInput.updateInput(input);
});

// - Game Loop -
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
        greenTank.move();

        // - Draw Event -
        for (let i = 0; i < projectiles.length; i++)
        {
            projectiles[i].update();

            if (projectiles[i].pos.dx < 0 || projectiles[i].pos.dx > canvas_width || projectiles[i].pos.dy < 0 || projectiles[i].pos.dy > canvas_height)
            {
                projectiles.splice(i, 1);
            }
        }


    }

    if (_kInput.v_vertical)
    {
        greenTank.vel.magnitude += 1;
        fps += 5;
    }

    //Shooting
    if (_kInput.v_button_a)
    {
        let _projectile = new Projectile(greenTank.pos.dx, greenTank.pos.dy);

        _projectile.pos.dx = greenTank.pos.dx;
        _projectile.pos.dy = greenTank.pos.dy;

        _projectile.vel.dx = greenTank.vel.dx * 2;
        _projectile.vel.dy = greenTank.vel.dy * 2;

        projectiles.push(_projectile);
    }

    // - Draw Event -

    //Draw ground
    for (let i; i < canvas_width / 32; i++)// - Horizontal
    {
        for (let j; j < canvas_height / 32; j++)// - Vertical
        {
            let sx = (21 % 8) * 32;
            let sy = Math.floor(21 / 8) * 32;

            context.drawImage(groundSprite, sx + i, sy + j, 32 + i, 31 + j, -32, -32, 64, 64);
        }
    }

    greenTank.draw();


    for (let i = 0; i < projectiles.length; i++)
    {
        projectiles[i].draw();
    }


    // - Clear Input -
    _kInput.clearInput();

}

setUp();