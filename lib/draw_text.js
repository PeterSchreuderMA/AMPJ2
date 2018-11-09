class draw_text
{
    constructor(x,y,string,bigness)
    {
        this.x = x;
        this.y = y;
        this.string = string;
        this.bigness = bigness || 14;
    }

    draw(context)
    {
        //context.fillStyle.-webkit-text-stroke: 1px black;

        //color: white;
        //text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        context.lineWidth = 0;//Math.floor(this.bigness/10);
        context.textAlign = "center";
        context.font = this.bigness+"px Arial";
        context.fontWeight = "bold";
        context.fillStyle = "rgb(253, 128, 2)";
        context.shadowColor = "rgba(0,0,0,0.2)";
        //context.shadowBlur = 20;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;

        //context.fillText(this.string,this.x,this.y);
        context.fillText(this.string,this.x,this.y);
        //context.strokeText(this.string,this.x,this.y);
    }
}