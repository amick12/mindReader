let state = 0;

//get HTML elements by ID

//buttons
let getGoNext = document.getElementById('goNextBtn');
let getGoNext2 = document.getElementById('goNextBtn2');
let getReset = document.getElementById('resetBtn');
let getBtnDiv = document.getElementById('btnDiv');
let getDiv3 = document.getElementById('div3')


//divs
let header = document.getElementById('header');
let header2 = document.getElementById('header2');
let topPone = document.getElementById('topP');
let topPtwo = document.getElementById('topP2');
let pOne = document.getElementById('pOne');
let pTwo = document.getElementById('pTwo');

//setup click events
getGoNext.addEventListener('click', goNext);
getGoNext2.addEventListener('click', goNext);
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

let headArr = ['I can read your mind', 'Pick a number from 01-99', 'Add both digits together to get a new number', 'Subtract your new number from the original number'];

let pOneArr = ['When you have your number click next!', 'Ex: 14 is 1 + 4 = 5', 'Ex: 14 - 5 = 9', 'Find your new number'];

let pTwoArr = ['Then click next to proceed', 'Note the symbol beside the number', 'YOUR SYMBOL'];



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
      topPone.textContent = '';
      topPtwo.textContent = '';
      header2.classList.remove('text-success')
      header2.classList.remove('d-none');
      getGoNext.classList.remove('d-none');
      header2.textContent = headArr[0];
      pOne.textContent = '';
      pTwo.textContent = '';
      getBtnDiv.classList.add('d-none');
      getGoNext.textContent = 'Go!';
      header1.textContent = '';
      getDiv3.classList.add('mt-5');
      break;

    case 1:
      header2.classList.add('d-none');
      getGoNext.classList.add('d-none');
      getBtnDiv.classList.remove('d-none');
      resetBtn.textContent = 'Reset';
      header1.textContent = headArr[1];;
      pTwo.textContent = pTwoArr[0];
      getGoNext2.classList.remove('d-none');
      getGoNext2.textContent = 'Next';
      break;

    case 2:
      header1.textContent = headArr[2];
      pOne.textContent = pOneArr[1];
      pTwo.textContent = pTwoArr[0];
      break;
    case 3:
      header1.textContent = headArr[3];
      pOne.textContent = pOneArr[2];
      pTwo.textContent = pTwoArr[0];
      break;

    case 4:
      header1.style.overflow = "scroll";
      header1.style.overflowX = "hidden";
      header1.innerHTML = randomN();
      topPone.textContent = pOneArr[3];
      topPtwo.textContent = pTwoArr[1];
      goNextBtn2.textContent = 'Reveal';
      pOne.textContent = '';
      pTwo.textContent = '';
      break;

    case 5:
      topPone.textContent = '';
      topPtwo.textContent = '';
      header1.style.overflow = "hidden";
      header2.classList.remove('d-none', 'mb-5');
      getDiv3.classList.remove('mt-5');
      header1.textContent = 'Your Symbol Is';
      header2.classList.add('text-success')
      header2.textContent = yourSymbol;
      getGoNext2.classList.add('d-none');

      break;

    default:
      console.log('Hello');
      break;
  }
}

deploy();