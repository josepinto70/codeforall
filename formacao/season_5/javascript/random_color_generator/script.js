// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create the 5 columns with random colors
function createColumns() {
    const container = document.getElementById('columnsContainer');
    container.innerHTML = '';  // Clear any existing columns

    // Create 5 columns with random colors
    for (let i = 0; i < 5; i++) {
        const column = document.createElement('div');
        column.className = 'column';

        // Generate a random color
        const color = getRandomColor();
        column.style.backgroundColor = color;

        // Create the div showing the color number at the bottom
        const colorNumber = document.createElement('div');
        colorNumber.className = 'color-number';
        colorNumber.innerText = color;

        // Append the color number to the column
        column.appendChild(colorNumber);

        // Append the column to the container
        container.appendChild(column);
    }
}

// Function to refresh the colors when the button is clicked
function changeColors() {
    createColumns();
}

// Initial call to create columns when the page loads
createColumns();
