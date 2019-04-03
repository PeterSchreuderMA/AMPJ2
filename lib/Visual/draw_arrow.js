class draw_arrow
{
    constructor(x,y,length,width,scale)
    {
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.scale = scale;
    }

    update_pos(x,y)
    {
        this.x = x;
        this.y = y;
    }

    draw(context,dir)
    {
        this.dir = dir;

        let shaftHeight = 15;
        let shaftWidth = this.length * this.scale;
        let arrowHeight = 30;
        let arrowWidth = 40;

        context.fillStyle = "rgba(255,255,0,0.4)";

        context.save();
        context.translate(this.x,this.y);
        context.rotate(this.dir);

        context.moveTo(0,0);
        context.lineTo(0,-shaftHeight);
        context.lineTo(shaftWidth,-shaftHeight);
        context.lineTo(shaftWidth,-arrowHeight);
        context.lineTo(shaftWidth+arrowWidth,0);

        context.lineTo(shaftWidth,arrowHeight);
        context.lineTo(shaftWidth,shaftHeight);
        context.lineTo(0,shaftHeight);
        context.closePath();
        context.fill();
        context.stroke();

        context.restore();
    }
}