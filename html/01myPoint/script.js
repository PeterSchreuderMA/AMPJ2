const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let myPoints = [];

let titel_text = new draw_text(canvas.width/2, 50, "My Point",50);

function setUp(){
  for (var i = 0; i < 10; i++) {
    let myPoint = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height),10);
    myPoints.push(myPoint);
  }
  update();
}


function update(){
  requestAnimationFrame(update);

  let myPoint = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height),10);
  myPoints.push(myPoint);
  context.clearRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i < myPoints.length; i++)
  {
    myPoints[i].draw(context);
  }

  titel_text.draw(context);

}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
