// Getting Elements

const mainContainer = document.getElementById("mainContainer");

// Functions

function startGame() {
    clearHTML();
    renderGame();
};

function clearHTML() {
    mainContainer.innerHTML = "";
};

function exitGame() {
    window.close();
};  

function renderMenu() {
    const gameName = document.createElement("h1");
    gameName.textContent = "ROCK PAPER SCICCORS GAME";
    const choiceContainer = document.createElement("div");

    const rockImg = document.createElement("img");
    rockImg.setAttribute("src","assets/rock.png")
    const paperImg = document.createElement("img");
    paperImg.setAttribute("src","assets/paper.png")
    const sciImg = document.createElement("img");
    sciImg.setAttribute("src","assets/sciccors.png")

    const startGameBtn = document.createElement("button");
    startGameBtn.textContent = "PLAY THE GAME";
    startGameBtn.id = "startGame";
    const exitGameBtn = document.createElement("button");
    exitGameBtn.textContent = "QUIT";
    exitGameBtn.id = "exitGame";
    
    mainContainer.appendChild(gameName);
    mainContainer.appendChild(choiceContainer);
    mainContainer.appendChild(startGameBtn);
    mainContainer.appendChild(exitGameBtn);
    choiceContainer.appendChild(rockImg);
    choiceContainer.appendChild(paperImg);
    choiceContainer.appendChild(sciImg);

    startGameBtn.addEventListener("click", ()=> {
        startGame();
    });
    exitGameBtn.addEventListener("click", ()=> {
        exitGame();
    });
    
};

function renderGame() {
    const gameName = document.createElement("h1");
    gameName.textContent = "ROCK PAPER SCICCORS GAME";

    // Game Buttons
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "MAIN MENU";
    menuBtn.id = "menuBtn";
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "RESET";
    resetBtn.id = "resetBtn";
    mainContainer.appendChild(gameName);
    mainContainer.appendChild(menuBtn);
    mainContainer.appendChild(resetBtn);

    menuBtn.addEventListener("click", ()=> {
        clearHTML();
        renderMenu();
    });
    resetBtn.addEventListener("click", ()=> {
        clearHTML();
        renderGame();
    });


    // Player render
    const playerContainer = document.createElement("div");
    playerContainer.id = "playerContainer";
    mainContainer.appendChild(playerContainer);

    const playerName = document.createElement("h1");
    playerName.textContent = "YOU";
    const playerChoices = document.createElement("div");
    playerChoices.id = "playerChoices";

    const playerRockContainer = document.createElement("div");
    const playerRock = document.createElement("img");
    playerRock.setAttribute("src","assets/rock.png");
    const playerRockTitle = document.createElement("p");
    playerRockTitle.textContent = "ROCK";

    const playerPaperContainer = document.createElement("div");
    const playerPaper = document.createElement("img");
    playerPaper.setAttribute("src", "assets/paper.png");
    const playerPaperTitle = document.createElement("p");
    playerPaperTitle.textContent = "PAPER";
    
    const playerSciContainer = document.createElement("div");
    const playerSci = document.createElement("img");
    playerSci.setAttribute("src", "assets/sciccors.png");
    const playerSciTitle = document.createElement("p");
    playerSciTitle.textContent = "SCICCORS";

    let playerInput = "";
    let playerScore = 0;

    const playerScoreTitle = document.createElement("h1");
    playerScoreTitle.textContent = "SCORE: 0";
    
    playerContainer.appendChild(playerName);
    playerContainer.appendChild(playerChoices);
    playerContainer.appendChild(playerScoreTitle);
    playerChoices.appendChild(playerRockContainer);
    playerChoices.appendChild(playerPaperContainer);
    playerChoices.appendChild(playerSciContainer);
    playerRockContainer.appendChild(playerRock);
    playerRockContainer.appendChild(playerRockTitle);
    playerPaperContainer.appendChild(playerPaper);
    playerPaperContainer.appendChild(playerPaperTitle);
    playerSciContainer.appendChild(playerSci);
    playerSciContainer.appendChild(playerSciTitle);

    playerRock.addEventListener("click", ()=> {
        playerInput = 0;
        getPlayerInput();
        getComInput();
        gameRun();
    });
    playerPaper.addEventListener("click", ()=> {
        playerInput = 1;
        getPlayerInput();
        getComInput();
        gameRun();
    });
    playerSci.addEventListener("click", ()=> {
        playerInput = 2;
        getPlayerInput();
        getComInput();
        gameRun();
    });

    // Computer render
    const comContainer = document.createElement("div");
    comContainer.id = "comContainer";
    mainContainer.appendChild(comContainer);

    const comName = document.createElement("h1");
    comName.textContent = "COMPUTER";
    const comChoices = document.createElement("div");
    comChoices.id = "comChoices";

    const comRockContainer = document.createElement("div");
    const comRock = document.createElement("img");
    comRock.setAttribute("src","assets/rock.png");
    const comRockTitle = document.createElement("p");
    comRockTitle.textContent = "ROCK";

    const comPaperContainer = document.createElement("div");
    const comPaper = document.createElement("img");
    comPaper.setAttribute("src", "assets/paper.png");
    const comPaperTitle = document.createElement("p");
    comPaperTitle.textContent = "PAPER";
    
    const comSciContainer = document.createElement("div");
    const comSci = document.createElement("img");
    comSci.setAttribute("src", "assets/sciccors.png");
    const comSciTitle = document.createElement("p");
    comSciTitle.textContent = "SCICCORS";

    let comInput = 0;
    let comScore = 0;

    const comScoreTitle = document.createElement("h1");
    comScoreTitle.textContent = "SCORE: 0";
    
    comContainer.appendChild(comName);
    comContainer.appendChild(comChoices);
    comContainer.appendChild(comScoreTitle);
    comChoices.appendChild(comRockContainer);
    comChoices.appendChild(comPaperContainer);
    comChoices.appendChild(comSciContainer);
    comRockContainer.appendChild(comRock);
    comRockContainer.appendChild(comRockTitle);
    comPaperContainer.appendChild(comPaper);
    comPaperContainer.appendChild(comPaperTitle);
    comSciContainer.appendChild(comSci);
    comSciContainer.appendChild(comSciTitle);

    const comPlayerContainer = document.createElement("div");
    mainContainer.appendChild(comPlayerContainer);
    comPlayerContainer.appendChild(playerContainer);
    comPlayerContainer.appendChild(comContainer);
    
    // Game text
    const gameText = document.createElement("p");
    gameText.textContent = "CHOOSE!";
    mainContainer.appendChild(gameText);
    gameText.style.fontSize = "24px";

    // Game modal
    const lostModal = document.getElementById("lostModal");
    const wonModal = document.getElementById("wonModal");

    const startGameModalBtn = document.querySelectorAll("#startGameModalBtn");
    const exitGameModalBtn = document.querySelectorAll("#exitGameModalBtn");

    startGameModalBtn.forEach(button => {
        button.addEventListener("click", ()=> {
            console.log("hello")
            lostModal.close();
            wonModal.close();
            startGame();
        })
    });

    exitGameModalBtn.forEach(button => {
        button.addEventListener("click", ()=> {
            console.log("hello")
            lostModal.close();
            wonModal.close();
            exitGame();
        })
    });

    // Game Functions
    function getPlayerInput () {
        playerPaper.style.opacity = "100%";
        playerSci.style.opacity = "100%";
        playerRock.style.opacity = "100%";

        if (playerInput === 0) {
            playerPaper.style.opacity = "50%";
            playerSci.style.opacity = "50%";
        } else if (playerInput === 1) {
            playerRock.style.opacity = "50%";
            playerSci.style.opacity = "50%";
        } else if (playerInput === 2) {
            playerPaper.style.opacity = "50%";
            playerRock.style.opacity = "50%";
        };
    };

    function getComInput() {
        comInput = Math.floor(Math.random() * 3);

        comPaper.style.opacity = "100%";
        comSci.style.opacity = "100%";
        comRock.style.opacity = "100%";

        if (comInput === 0) {
            comPaper.style.opacity = "50%";
            comSci.style.opacity = "50%";
        } else if (comInput === 1) {
            comRock.style.opacity = "50%";
            comSci.style.opacity = "50%";
        } else if (comInput === 2) {
            comPaper.style.opacity = "50%";
            comRock.style.opacity = "50%";
        };
    };

    function gameRun() {
        if (playerInput === comInput) {
            gameText.textContent = "TIE!";
        } else if (playerInput === 0 && comInput === 1) {
            comScore ++;
            gameText.textContent = "You lost, Paper beats Rock!";
        } else if (playerInput === 0 && comInput === 2) {
            playerScore ++;
            gameText.textContent = "You won, Rock beats Sciccors!";
        } else if (playerInput === 1 && comInput === 0) {
            playerScore ++;
            gameText.textContent = "You won, Paper beats Rock!";
        } else if (playerInput === 1 && comInput === 2) {
            comScore ++;
            gameText.textContent = "You lost, Sciccors beats Paper!";
        } else if (playerInput === 2 && comInput === 0) {
            comScore ++;
            gameText.textContent = "You lost, Rock beats Sciccors!";
        } else if (playerInput === 2 && comInput === 1) {
            playerScore ++;
            gameText.textContent = "You won, Sciccors beats Paper!";
        };
        
        playerScoreTitle.textContent = "SCORE: " + playerScore;
        comScoreTitle.textContent = "SCORE: " + comScore;

        if (comScore === 5) {
            lostModal.showModal();
        } else if (playerScore === 5) {
            wonModal.showModal();
        };
    }
}

// StartUp function

clearHTML();
renderMenu();