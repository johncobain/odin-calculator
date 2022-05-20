const numberBtn = document.querySelectorAll('.white');
const operatorBtn = document.querySelectorAll('.blue');
const eraseBtn = document.querySelectorAll('.red')
const equalBtn = document.querySelectorAll('.green');
const screen = document.querySelector('.screen');

let firstNum = '';
let operator = '';
let secondNum = ''; 

numberBtn.forEach(key =>{
  key.addEventListener('click', ()=> equation(key.id))
});
operatorBtn.forEach(key =>{
  key.addEventListener('click', ()=> setOperator(key.id));
});
eraseBtn.forEach(key =>{
  key.addEventListener('click', ()=> removeEquation(key.id));
})
equalBtn.forEach(key =>{
  key.addEventListener('click', ()=> result());
})


function equation(num){
  if(firstNum === ''){
    screen.textContent = '';
  }
  if(operator === ''){
    firstNum += num;
  }else{
    secondNum += num
  }
  addOnScreen(num)
}

function removeEquation(num){
  if(num === 'clear'){
      removeFromScreen('clear');
      resetSettings();
      return;
  }
  if(operator == ''){
    firstNum = firstNum.slice(0, -1);
  }else if(operator !== '' && secondNum === ''){
    operator = '';
  }else if(operator !== '' && secondNum !== ''){
    secondNum = secondNum.slice(0, -1);
  }
  removeFromScreen('delete');
}

function setOperator(opt){
  if(firstNum === '') return;
  if(operator === ''){
    operator = opt;
    addOnScreen(opt);
  }else{
    result();
  }
}

function resetSettings(){
  firstNum = '';
  operator = '';
  secondNum = '';
}

function addOnScreen(num){
  if(num === 'percent'){
    screen.textContent += '%';
    return;
  }
  if(num === '/'){
    screen.textContent += '÷';
    return;
  }
  if(num === '**'){
    screen.textContent += '^';
    return;
  }
  if(num === '*'){
    screen.textContent += 'x';
    return;
  }
  screen.textContent += num;
}

function removeFromScreen(how){
  if(how === 'clear'){
    screen.textContent = '';
    return;
  }
  const text = screen.textContent;
  const newText = text.slice(0, text.length-1);
  screen.textContent = newText;
}

function result(){
  let res = operate(operator, firstNum, secondNum);
  screen.textContent = res;
  resetSettings();
}


function add(a, b){
  return a + b;
}
function substract(a, b){
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b){
  return a / b;
}
function power(a, b){
  return a ** b;
}
function percent(a, b){
  return a*(b/100);
}

function operate(opt, a, b){
  a = Number(a);
  b = Number(b);
  switch (opt){
    case '+':
      return add(a, b);
    case '-':
      return substract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b === 0) return null
      else return divide(a, b);
    case  '**':
      return power(a, b);
    case 'percent':
      return percent(a, b);
    default:
      return null
  }
}