// Using brain for the project of game.
// console.log("Welcome to java scripts :");
// alert("hello ji");
// We have needed two variables.

// random choices.
// Math.floor(Math.random()*10)

// 9
alert("Welcome To Home :");
let UserScore= 0;
let CompScore=0;

// let's select query selector
const choices= document.querySelectorAll(".choice");// . = for the class.
// for message ?
const msg= document.querySelector("#move_msg");

// for final scores
const Userscorepp=document.querySelector("#my_score");// # = for the id.
const comput= document.querySelector("#comp_score");

// How to play game;

//Function called-- computer choice.
const GetGenerate_Computerchoice= () =>{
    // Generate computer random choice?
    const ranchoice=["rock", "paper", "scissors"];
    //math fuction - calling for the random choice
    const ranIx= Math.floor(Math.random()*3);
    return ranchoice[ranIx];
    
};


// Function -- when the game is draw
const drawGame= () =>{
    console.log("Oh!, The game was draw.");
    //something effect at text content.
    msg.innerText= "oh!, Please try again.";
    //something effect occured at color format.
    msg.style.backgroundColor= "#234464";
};

// Who is win.
const showWin = (userWin, Userchoice, comp) =>{
    {
        if(userWin)
        {
            // increase the user scores.
            UserScore++;
            console.log("You won!");
            Userscorepp.innerText= UserScore;
            // something effect at the text.
            msg.innerText = `You won, your ${Userchoice} beats ${comp}`;
            // effect occured in the color mode.
            msg.style.backgroundColor= "green";
        }
        else
        {
            // computer scores
            CompScore++;
            console.log("You lose.");
            comput.innerText= CompScore;
            // something effect at the text.
            msg.innerText= `You lose. Computer ${comp} beats your ${Userchoice}`;
            // effect occured in the color mode.
            msg.style.backgroundColor= "red";

        }
    }
};

// Function called-> Userchoice
const playGame= (Userchoice) =>{
    // Generate user choice:
    console.log("User choiced = ",Userchoice);
    //computer choice
    const comp= GetGenerate_Computerchoice();
    console.log("Computer choiced= ", comp);

    // Now, fighting both are in.
    //first condition-- Draw the match.
    if(Userchoice==comp)
    {
        //The match draw.
        drawGame();
    }
    else 
    {
    // Second condition
    let userWin= true;// won
    if(Userchoice=="rock")
    {
        //store it.
        userWin= comp== "paper" ? false : true;// paper, scissors-- for the computer.
    }

    // Third condition
    
    else if(Userchoice=="paper")// rock, scissors
        {
            userWin= comp=="scissors"? false : true;
        }
    else
    {
        //fouth condition.
        userWin= comp== "rock" ? false : true;// rock, paper
    }

    // Making a decission to win ?
    showWin(userWin, Userchoice, comp);
};
}

// let's add a even listener that effects will come click pad.
choices.forEach((choice) => {
    console.log(choice);
    // add a even listener
    choice.addEventListener("click", () => {
        const Userchoice= choice.getAttribute("id");
        //console.log("The choice was clicked.", Userchoice);
        //Function calling-> User choice.
        playGame(Userchoice);
    });
});


//  Amazing :):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):)

// Finally you did the project.