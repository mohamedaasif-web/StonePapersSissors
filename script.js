

//Game
function showMessage() {
    let playGame = confirm("Play Game ? rock,paper or scissors?");
    if (playGame) {
        //play
        let playerChoice = prompt("Please enter rock,paper,scissor.");
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissor"
            ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer =
                    computerChoice === 1
                        ? "rock"
                        : computerChoice === 2
                            ? "paper"
                            : "scissor";

                let result =
                    playerOne === computer
                        ? "Tie Game!"
                        : playerOne === "rock" && computer === "paper"
                            ? `playerOne: ${playerOne}\n Computer: ${computer}\n computer Wins!`
                            : playerOne === "paper" && computer === "scissor"
                                ? `playerOne: ${playerOne}\n Computer: ${computer}\n computer Wins!`
                                : playerOne === "scissor" && computer === "rock"
                                    ? `playerOne: ${playerOne}\n Computer: ${computer}\n computer Wins!`
                                    : `playerOne: ${playerOne}\n Computer: ${computer}\n playerOne Wins!`;
                alert(result);
                let playAgain = confirm("play Again");
                playAgain ? location.reload() : alert("ok , thanks for Playing.");
            } else {
                alert("You didn't enter rock,paper,scissor.");
            }
        } else {
            alert("Next Time.");
        }
    } else {
        alert("Ok ,Next Time Bro.");
    }
}
