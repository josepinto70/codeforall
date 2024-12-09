const colors = document.querySelector('.colors');

const colorsPattern = [
  '#FF0000', // Vermelho
  '#00FF00', // Verde
  '#0000FF', // Azul
  '#FFFF00', // Amarelo
  '#FF00FF', // Magenta
  '#00FFFF', // Ciano
  '#800000', // Marrom
  '#008000', // Verde Escuro
  '#000080', // Azul Escuro
  '#808000', // Bege
  '#800080', // Roxo
  '#008080', // Verde Azulado
  '#FF8000', // Laranja
  '#FF0080', // Vermelho Claro
  '#80FF00', // Verde Claro
  '#00FF80', // Azul Claro
  '#808080', // Cinza
  '#FFFFFF', // Branco
  '#000000' // Preto
];

function genRandomColor() {

  const index= Math.floor(Math.random() * colorsPattern.length);
  return colorsPattern[index];
}

for (let i = 0; i < 5; i++) {
  const color = document.createElement('div');
  
  color.classList.add('color');
  color.style.backgroundColor = genRandomColor();
  colors.appendChild(color);
  console.log(color);
}

