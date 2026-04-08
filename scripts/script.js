let choices = document.querySelectorAll(".choices");
let resultMsg = document.querySelector("#msg");
let userScorePara = document.querySelector("#US");
let compScorePara = document.querySelector("#CS");

let compChoiceGen = () => {
    let choicesArr = ["rock", "paper", "scissor"];
    return choicesArr[Math.floor(3 * Math.random())];
}

let playGame = (userChoice, compChoice) => {
    let userWin = true;

    if (userChoice === compChoice) {
        resultMsg.innerText = "It's a draw!";
        return;
    }

    if (userChoice === "rock") {
        if (compChoice === "paper") {
            userWin = false;
        }
    }  

    else if (userChoice === "paper") {
        if (compChoice === "scissor") {
            userWin = false;
        }
    }

    else if (userChoice === "scissor") {
        if (compChoice === "rock") {
            userWin = false;
        }
    }

    if (userWin) {
        resultMsg.innerText =`Congratulations! Your ${userChoice} beats ${compChoice}`;
        userScorePara.innerText = Number(userScorePara.innerText) + 1;
    }

    else{
        resultMsg.innerText =`Hard luck! ${compChoice} beats Your ${userChoice}`;
        compScorePara.innerText = Number(compScorePara.innerText) + 1;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        let compChoice = compChoiceGen();
        playGame(userChoice, compChoice);
    })
});