let state = 0;

//get HTML elements by ID

//buttons
let getGoNext = document.getElementById('goNextBtn');
let getReset = document.getElementById('resetBtn');

//divs
let header = document.getElementById('header');
let pOne = document.getElementById('pOne');
let pTwo = document.getElementById('pTwo');

//setup click events
getGoNext.addEventListener('click', goNext);
getReset.addEventListener('click', reset);

//state control functions

//increase state by one when next button is clicked
function goNext() {
  state++;
  deploy();
}

//set state to 0 when reset button is clicked
function reset() {
  state = 0;
  deploy();
}

let headArr = ['I can read your mind', 'Pick a number from 01-99', 'Add both digits together to get a new number', 'Subtract you new number from the original number'];

let pOneArr = ['When you have your number click next!', 'Ex: 14 is 1 + 4 = 5', 'Ex: 14 - 5 = 9', 'Find your new number', 'Note the Symbol beside the number'];

let pTtwoArr = ['click next to proceed', 'Note the symbol beside the number'];



//set array of symbols to variable
let symb = ['@', '&', '$', '+', '!', '#', '*', '^', '?', '%'];
let yourSymbol;

function randomN() {
  let content = '';
  yourSymbol = symb[Math.floor(Math.random() * symb.length)];

  for (let i = 0; i < 100; i++) {
    randomSymbols = symb[Math.floor(Math.random() * symb.length)];
    if (i % 9 === 0) {

      content += i + ` : ${yourSymbol}<br>`;

    } else {

      content += i + ` : ${randomSymbols}<br>`;
    }

  }
  return content;
}

//use switch statement to hold req of each "page"
function deploy() {
  switch (state) {
    case 0:
      header.textContent = headArr[0];
      resetBtn.classList.add('d-none');
      break;

    case 1:
      resetBtn.classList.remove('d-none');
      resetBtn.textContent = 'Reset';
      header.textContent = headArr[1];
      pOne.textContent = pOneArr[0];
      pTwo.textContent = pTwoArr[0];
      goNextBtn.textContent = 'Next';
      break;
    case 2:
      header.textContent = headArr[2];
      pOne.textContent = pOneArr[1];
      pTwo.textContent = pTwoArr[0];
      break;
    case 3:
      header.textContent = headArr[3];
      pOne.textContent = pOneArr[2];
      pTwo.textContent = pTwoArr[0];
      break;

    case 4:
      header.style.overflow = "scroll";
      header.innerHTML = randomN();
      pOne.textContent = pOneArr[3];
      goNextBtn.textContent = 'Reveal';
      break;

    case 5:
      header.innerHTML = yourSymbol;
      pOne.textContent = pOneArr[3];
      pTwo.textContent = pTwoArr[1];
      break;

    default:
      console.log('Hello');
      break;
  }
}

deploy();