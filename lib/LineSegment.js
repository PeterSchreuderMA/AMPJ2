class LineSegment
{
    constructor(start_vector,end_vector,colour)
    {
        this.start_vector = start_vector;
        this.end_vector = end_vector;
        this.colour = colour;
    }

    update_pos(vector1,vector2)
    {
        this.start_vector = vector1;
        this.end_vector = vector2;
    }

    draw (context)
    {
        context.moveTo(this.start_vector.dx,this.start_vector.dy);
        context.lineTo(this.end_vector.dx,this.end_vector.dy);
        context.stroke();

        let new_text = new draw_text(this.start_vector,this.end_vector,"Line Lenght: "+toString(this.end_vector-this.start_vector));
        new_text.draw(context);
    }
}