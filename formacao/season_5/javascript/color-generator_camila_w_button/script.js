// Predefined colors pattern
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
  '#000000'  // Preto
];

// Function to generate a random color from the colorsPattern array
function genRandomColor() {
  const index = Math.floor(Math.random() * colorsPattern.length);
  return colorsPattern[index];
}

// Function to generate the 5 columns with random colors
function createColumns() {
  const container = document.getElementById('colorsContainer');
  container.innerHTML = ''; // Clear existing columns

  // Create 5 columns with random colors
  for (let i = 0; i < 5; i++) {
    const column = document.createElement('div');
    column.classList.add('color');

    const color = genRandomColor();
    column.style.backgroundColor = color;

    // Create a div to display the color number
    //at the bottom
    const colorNumber = document.createElement('div');
    colorNumber.innerText = color;

    column.appendChild(colorNumber);
    container.appendChild(column);
  }
}

// Function to change colors when the button is clicked
function changeColors() {
  createColumns();  // Regenerate columns with new colors
}

// Initial columns creation
createColumns();

// Add event listener to the button
const btn = document.getElementById('color_btn');
btn.addEventListener('click', changeColors, false);
