const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.addEventListener('click', (e) => {
 const fieldCoord = {
   y: e.clientY - (field.offsetTop + field.clientTop),
   x: e.clientX - (field.offsetLeft + field.clientLeft),
 }

 const ballCoord = {
   y: fieldCoord.y - ball.offsetHeight / 2,
   x: fieldCoord.x - ball.offsetWidth / 2
 }

 if (ballCoord.y < 0) {
   ballCoord.y = 0;
 }

 if (ballCoord.x < 0) {
   ballCoord.x = 0;
 } 

 if (ballCoord.y + ball.clientHeight > field.clientHeight) {
  ballCoord.y = field.clientHeight - ball.clientHeight;
 }

 if (ballCoord.x + ball.clientWidth > field.clientWidth) {
  ballCoord.x = field.clientWidth - ball.clientWidth;
}

 ball.style.cssText = `top: ${ballCoord.y}px; left: ${ballCoord.x}px`;

})

