const button = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

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

function showResult(){
  screen.textContent = "I'm the result"
}


button.forEach(btn => btn.addEventListener('click' ,opt => {
  const option = opt.target.id;
  if(option === '='){
    showResult();
    return;
  }
  if(option === 'delete' || option === 'clear'){
    removeFromScreen(option);
    return;
  }
  addOnScreen(option);
}));