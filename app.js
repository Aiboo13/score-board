const p1button = document.querySelector('#p1-button');
const p2button = document.querySelector('#p2-button');
const p1display = document.querySelector('#p1-display');
const p2display = document.querySelector('#p2-display');

let p1Score = 0;
let p2Score = 0;
let winpoints = 5;
let isGameOver = false;
// membuat deklrasi 

p1button.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winpoints) {
      isGameOver = true;
      p1display.classList.add('winner');
    }
  }
  
  p1display.textContent = p1Score;
})
p2button.addEventListener('click', () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winpoints) {
      isGameOver = true;
      p2display.classList.add('winner');
    }
  }
  p2display.textContent = p2Score;
})