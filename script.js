// Getting Elements

const mainContainer = document.getElementById("mainContainer");

// Functions

function startGame() {
    clearHTML();
    renderGame();
    console.log("hi");
};

function resetGame() {
    clearHTML();
    renderMenu();
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

// generateMenu Event listeners

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

    // Game Button
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "MAIN MENU";
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "RESET";
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

    // Player
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

    let playerScore = 0;
    let playerInput = "";
    const playerScoreTitle = document.createElement("h1");
    playerScoreTitle.textContent = "SCORE:" + playerScore;
    
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
    });
    playerPaper.addEventListener("click", ()=> {
        playerInput = 1;
    });
    playerSci.addEventListener("click", ()=> {
        playerInput = 2;
    });

    // Computer
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

    let comScore = 0;
    let comInput = "";
    const comScoreTitle = document.createElement("h1");
    comScoreTitle.textContent = "SCORE:" + comScore;
    
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


    // Game rule
    /* 
        rock = 0;
        paper = 1;
        sci = 2;
    */

    if (playerInput === comInput) {
        console.log("TIE!");
    } else if (playerInput === 0 && comInput === 1) {
        comScore =+ 1;
    } else if (playerInput === 0 && comInput === 2) {
        playerScore =+ 1;
    } 
};

// StartUp function

clearHTML();
renderGame();

/* 

Main menu garch ireed start button darsnaar togloom ehlene

Uy buriin ehend toglogch turuulj songoltoo hiine
Daraad ni computer songoltoo hiine
Hiisen 2 songoltiig haritsuulj toglogch esvel computerd 1 onoo nemne
Turuulj 5 onoo tsugluulsan ni ylagch bolj modal garch irne

*/