'use strict';

var message = 1;
const guess = document.querySelector('.guess');
const header = document.querySelector('header');
const main = document.querySelector('main');
const body = document.querySelector('body');
const check = document.querySelector('.check');
var clue = Math.trunc(Math.random() * 20);

console.log(clue);

var chanceI = 10;
var scoreI = 20;
var subI = 2;
let highscore = 0;

const currentScore = function (scoreI, chanceI) {
  document.querySelector('.score').textContent = Math.ceil(scoreI);
  document.querySelector('.chance').textContent = chanceI;
  if (chanceI <= 7) body.style.backgroundColor = 'rgb(255, 106, 0)';
  if (chanceI <= 4) body.style.backgroundColor = 'rgb(184, 43, 4)';
  if (chanceI <= 1) body.style.backgroundColor = 'rgb(210, 36, 9)';
  if (chanceI <= 0) {
    body.style.backgroundColor = 'red';
    main.classList.add('empty');
    header.classList.add('empty');
    document.querySelector('.no__number').style.display = 'block';
    document.querySelector('.no__number').textContent = '📍📍OUT';
  }
};

check.addEventListener('click', () => {
  if (!guess.value) {
    document.querySelector('.message').textContent = '';
    main.classList.add('empty');
    header.classList.add('empty');
    document.querySelector('.no__number').style.display = 'block';
  } else if (guess.value > 20) {
    document.querySelector('.message').textContent = '';
    main.style.display = 'none';
    header.style.display = 'none';
    document.querySelector('.no__number').style.display = 'block';
    document.querySelector('.no__number').textContent =
      'Enter the number between 0 to 20';
    body.classList.add('reddish');
  } else if (clue == guess.value) {
    body.style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'Correct answer😍';
    document.querySelector('.number').textContent = clue;
    scoreI = 0 + scoreI;
    document.querySelector('.score').textContent = Math.ceil(scoreI);
    console.log('Score: ', scoreI, 'HS: ', highscore);

    if (scoreI > highscore) {
      highscore = scoreI;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess.value > clue) {
    chanceI--;
    scoreI -= subI;
    body.style.backgroundColor = 'orange';
    document.querySelector('.message').textContent = 'Exceeded 😡';
    currentScore(scoreI, chanceI);
  } else if (guess.value < clue) {
    scoreI -= subI;
    chanceI--;
    body.style.backgroundColor = 'orange';
    document.querySelector('.message').textContent = 'Not yet reach🥶';
    currentScore(scoreI, chanceI);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreI = 20;
  chanceI = 10;
  clue = Math.trunc(Math.random() * 20) + 1;
  console.log(clue);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scoreI;
  document.querySelector('.chance').textContent = chanceI;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  body.style.backgroundColor = '#222';
});
