class BackgroundLines
{
    constructor(x1,y1,x2,y2)
    {
        this.x1 = x1;
        this.y1 = y1;

        this.x2 = x2;
        this.y2 = y2;
    }

    draw (context)
    {

        for (let i = this.x1; i < this.x2; i += 5)//Horizontal
        {
            context.lineWidth = (2);
            context.moveTo(this.x1 + i, this.y1);
            context.lineTo(this.x1 + i, this.y1 + this.y2);
            context.stroke();
        }


    }
}