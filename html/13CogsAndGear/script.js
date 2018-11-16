const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

let cog = new Image();
cog.src = "gear.png";
cog.rotation = 0;

let background = new Image();
background.src = "background.jpg";


function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    DrawCog(315,315,cog.rotation-0.2);

    DrawCog(500,500,-cog.rotation-0.2);

    cog.rotation += 0.01;

}

update();

function DrawCog(_x,_y,_dir)
{
    context.save();
    context.translate(_x,_y);
    context.rotate(_dir);
    context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
    context.restore();
}


function getRandomNumber(min,max)
{
    return Math.random()*(max - min) + min;
}

