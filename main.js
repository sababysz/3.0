const checkbox = document.getElementById('check-1');
const ball = document.querySelector('.ball');

checkbox.addEventListener('click', () => {
  localStorage.setItem('checkboxState', checkbox.checked);
  updateBallPosition();
});

window.addEventListener('load', () => {
  const checkboxState = localStorage.getItem('checkboxState');
  if (checkboxState === 'true') {
    checkbox.checked = true;
    updateBallPosition();
  }
});

function updateBallPosition() {
  if (checkbox.checked) {
    ball.classList.add('ball-move');
  } else {
    ball.classList.remove('ball-move');
  }
}




// Defina uma variável global para armazenar o estado do checkbox
let checkboxState = false;

// Seleciona o elemento HTML que tem a classe "background"
const background = document.querySelector('.background');

// Adiciona um ouvinte de eventos para detectar a mudança no estado do checkbox
document.getElementById("check-1").addEventListener("change", function() {
  // Atualize a variável global com o novo estado do checkbox
  checkboxState = this.checked;



  // Atualize a cor de fundo com base no estado atual do checkbox
  if (checkboxState) {
    background.style.backgroundColor = "#FFDDFF";
  } else {
    background.style.backgroundColor = "#000112";
  }
});