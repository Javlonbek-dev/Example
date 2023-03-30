let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
context.fillStyle = '#ffffff';
context.fillStyle = '#ff0000';
const squareSize = 50;
const n = prompt("kvadrat tomonini kiriting");
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if((i === 0 || j === 0 || i === n - 1 || j === n - 1)){
            context.fillStyle = '#ff0000';   
        } 
        else{
            context.fillStyle='#ffffff';
        }
  const x = i * squareSize; 
  const y = j * squareSize;
  context.beginPath();
  context.rect(x, y, squareSize, squareSize);
  context.stroke();
  context.beginPath();
  context.rect(x + 1, y + 1, squareSize - 2, squareSize - 2);
  context.fill();
}
}


