class CalculateLinear
{
    constructor(slope,intercept)
    {
        this.slope = slope;
        this.intercept = intercept;
    }

    calcY(x)
    {
        return this.slope * x + this.intercept;
    }

    letTwoPointsDefineLine(A,B)
    {
        this.slope = (B.y - A.y) / (B.x - A.x);
        this.intercept = A.y - this.slope * A.x;
    }

    draw(context,color)
    {
        this.color = color || "black";

        context.strokeStyle = this.color;
        context.beginPath();
        context.moveTo(0,this.calcY(0));
        context.lineTo(canvas_width,this.calcY(canvas_width));
        context.closePath();
        context.lineWidth = 5;
        context.stroke();
    }

    intersection(m)
    {
        let ans = {};
        ans.x = (this.intercept - m.intercept) / (m.slope - this.slope);
        ans.y = this.slope * ans.x + this.intercept;
        return ans;
    }
}