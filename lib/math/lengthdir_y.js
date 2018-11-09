class lengthdir_y
{
    constructor(dir,length)
    {
        this.length = length;
        this.dir = dir;
    }

    calculate()
    {

        let radAngle = Math.toRadians(this.dir); //Bereken de gradehoek in radians
        //return (float) (Math.sin(radAngle) * this.length); // Zet de X en bereken dat met Cos
        return this.length * Math.sin(radAngle);
    }
}