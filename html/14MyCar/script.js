const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;


let background = new Image();
background.src = "street.png";

let frontWheel = new Image();
frontWheel.src = "wheel.png";
let rearWheel = new Image();
rearWheel.src = "wheel.png";

let rotation = 0;


let car = new Image();
car.src = "car.png";
car.pos = new Vector2d(0,600);
car.vel = new Vector2d(5,0);
var frontWheelVector = new Vector2d(672,119)

background.addEventListener("load", ()=> {
    car.pos.dy = canvas_height - car.height - 60;
    update();
})

addEventListener('keydown', (evt)=>
{
    console.log(evt.key);
    switch (evt.key)
    {
        case "ArrowRight":
            if (car.vel <= 15)
            car.vel += 2;
            break;

        case "ArrowLeft":
            if (car.vel >= -15)
            car.vel -= 2;
            break;
    }
})

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    context.drawImage(background,0,0,canvas_width,canvas_height);


    car.pos.add(car.vel);
    DrawCar(car, car.pos.dx, car.pos.dy);

    DrawWheel(car.pos.dx+751, car.pos.dy+200, frontWheel.rot);

    DrawWheelRear(car.pos.dx+210, car.pos.dy+200, frontWheel.rot);

    //DrawWheel(500,500,-cog.rotation-0.2);

    frontWheel.rot += car.vel.dx / 80;
    //frontWheel.pos += frontWheel.vel;

    if (car.pos.dx > canvas_width)
    {
        car.pos.dx = -car.width;
    }

    if (car.pos.dx < 0)
    {
        car.pos.dx = canvas_width;
    }
}



function DrawWheel(_x,_y,_dir)
{
    context.save();
    context.drawImage(frontWheel,-0.5*frontWheel.width,-0.5*frontWheel.height);
    context.rotate(_dir);
    context.translate(_x,_y);
    context.restore();
}

function DrawWheelRear(_x,_y,_dir)
{
    context.save();
    context.drawImage(rearWheel,-0.5*frontWheel.width,-0.5*frontWheel.height);
    context.rotate(_dir);
    context.translate(_x,_y);
    context.restore();
}


function DrawCar(_x, _y)
{
    context.translate(_x, _y);
    context.drawImage(car, _x, _y);
}

function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}

