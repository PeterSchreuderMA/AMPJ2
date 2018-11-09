class getRandomNumber
{
    constructor(min,max)
    {
        this.min = min;
        this.max = max;

        return Math.random()*(max - min) + min;
    }


}