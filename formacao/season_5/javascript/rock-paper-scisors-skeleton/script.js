window.addEventListener("load",  () => {
    console.log("Hello");
    let player1img = document.querySelector("#player1img");
    let player2img = document.querySelector("#player2img");
    let play = document.querySelector(".play");
    let resultText = document.querySelector("#resultText");
    let options = ["Rock", "Paper", "Scissors"];
    let images = {Rock: "./assets/rock.png", Paper: "./assets/paper.png", Scissors: "./assets/scissors.png"};
    let player1Score = 0;  // Variable to track Player 1's score   
   
   
    console.log(play)
    play.addEventListener("click", () => {
        let p1selection = options[Math.floor(Math.random() * options.length)];
        let p2selection = options[Math.floor(Math.random() * options.length)];
        player1img.src = `${images[p1selection]}`;
        player2img.src = `${images[p2selection]}`;
        console.log("batata");
        if (p1selection === p2selection) {
            resultText.innerHTML = "Draw";
        } else if (p1selection === "Rock" && p2selection === "Scissors") {
            resultText.innerHTML = "Player 1 wins";
            player1Score++; // Increment Player 1's score
        } else if (p1selection === "Paper" && p2selection === "Rock") {
            resultText.innerHTML = "Player 1 wins";
        } else if (p1selection === "Scissors" && p2selection === "Paper") {
            resultText.innerHTML = "Player 1 wins";
        } else {
            resultText.innerHTML = "Player 2 wins";
        }
});
});