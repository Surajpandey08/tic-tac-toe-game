const clickSound = new Audio("audio/mixkit-retro-game-notification-212.mp3");
const winSound = new Audio("audio/mixkit-arcade-retro-game-over-213.mp3");
const resetSound = new Audio("audio/mixkit-video-game-win-2016.mp3");
const loadSound = new Audio("audio/mixkit-bonus-extra-in-a-video-game-2064.mp3");





// Get all the boxes


const boxes = document.querySelectorAll('.box');

// Get the reset button
const resetButton = document.querySelector('.resetButton');

// Variable to keep track of the current player ('X' or 'O')
let currentPlayer = 'X';

// Add click event listeners to all the boxes
boxes.forEach(box => {
  box.addEventListener('click', handleBoxClick);
});

// Add click event listener to the reset button
resetButton.addEventListener('click', resetGame);

// Function to handle box clicks
function handleBoxClick(e) {
  const box = e.target;
  

  // If the box is empty, place the current player's symbol and check for a win
  if (!box.textContent) {
    box.textContent = currentPlayer;
    clickSound.load();
    clickSound.play();
    checkWinner();
    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
  }
}

// Function to check for a winner
function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
      // Highlight the winning boxes
      boxes[a].style.backgroundColor = 'green';
      boxes[b].style.backgroundColor = 'green';
      boxes[c].style.backgroundColor = 'green';

      
      // Disable further clicks
      boxes.forEach(box => box.removeEventListener('click', handleBoxClick));

      winSound.play();

     

      

      
      return;

      
    }
  }
}

// Function to reset the game
function resetGame() {
  boxes.forEach(box => {
    box.textContent = '';
    box.style.backgroundColor = '#fff';
    box.addEventListener('click', handleBoxClick);
    resetSound.play();
  });
  currentPlayer = 'X';
}
