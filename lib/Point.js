class Point {
    constructor(x, y, r, color)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color || "rgba(155,255,0,0.4)";

    }

    draw(context,text,drawText)
    {
        this.text = text || "";
        this.drawText = drawText || false;

        context.beginPath();
        context.fillStyle = this.color;
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
        context.closePath();

        if (drawText)
        {
            let new_text = new draw_text(this.x, this.y, this.text + " X: " + Math.round(this.x) + " - Y: " + Math.round(this.y));
            new_text.draw(context);
        }
    }

    position(pos)
    {
        this.x = pos.dx;
        this.y = pos.dy;
    }

    distanceToOtherPoint(P)
    {
        let dx = this.x - P.x;
        let dy = this.y - P.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    drag()
    {
        let mousePos = {};
        let dragStatus = false;


        document.addEventListener('mousedown', (evt)=>
        {
            mousePos.x = evt.clientX;
            mousePos.y = evt.clientY;

            if (this.distanceToOtherPoint(mousePos) < this.r)
            {
                dragStatus = true;
                evt.stopImmediatePropagation();
            }
            else
            {
                dragStatus = false;
            }

            console.log('point is gonna be dragged');
        });

        if (this.distanceToOtherPoint(mousePos) < this.r)
        {
            document.body.style.cursor = "pointer";
        }
        else
        {
            document.body.style.cursor = "default";
        }

        document.addEventListener('mousemove',(evt)=>
        {
            if (dragStatus == true)
            {
                this.x = evt.clientX;
                this.y = evt.clientY;
            }
        });

        document.addEventListener('mouseup', (evt)=>
        {
            dragStatus = false;
        });


    }

}

