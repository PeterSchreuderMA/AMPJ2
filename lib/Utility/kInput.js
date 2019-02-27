class kInput
{

    constructor()
    {
        this.v_horizontal = 0;
        this.v_vertical = 0;
        this.v_button_a = 0;
    }



    updateInput(input)
    {
        //document.addEventListener('keydown', function(input)
        //{



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

                case "ArrowUp":
                    this.v_vertical = 1;
                    console.log("Right");
                    break;

                case "ArrowDown":
                    this.v_vertical = -1;
                    console.log("Right");
                    break;

                case " ":
                    this.v_button_a = 1;
                    console.log("A Button");
                    break;
            }
        //});
    }

    clearInput()
    {
        this.v_horizontal = 0;
        this.v_vertical = 0;
        this.v_button_a = 0;
    }

    get horizontal()
    {
        return this.v_horizontal;
    }

    get vertical()
    {
        return this.v_vertical;
    }

    get buttonA()
    {
        return this.v_button_a;
    }
}