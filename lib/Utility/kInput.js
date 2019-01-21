class kInput
{

    constructor()
    {
        this.v_horizontal = 0;
        this.v_vertical = 0;
    }

    updateInput()
    {
        document.addEventListener('keydown', function(input)
        {
            // this.v_horizontal = 0;
            // this.v_vertical = 0;

            switch (input.key)
            {
                case "ArrowLeft":
                    this.v_horizontal = -1;
                    console.log("Left");
                break;

                case "ArrowRight":
                    this.v_horizontal = 1;
                    console.log("Right");
                break;
            }
        });
    }

    get horizontal()
    {
        return this.v_horizontal;
    }

    get vertical()
    {
        return this.v_vertical;
    }

}