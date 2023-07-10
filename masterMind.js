//selectors
const btnSelector = document.querySelectorAll('.item'); 
const selectionSelector = document.querySelector('.selection');
const hintsSelector = document.querySelector(".hints");
const resetButton = document.getElementById('reset-button');
 

//vars
const colors = ['orange','pink','blue', 'green']; 
let final = randomFinal();
const selectedColors = [];
let guesses = 0;




//to brak it 
let gameEnded = false;



//random 
function randomFinal(){
    const finalFinal = [...new Array(4)].map((color) =>{
    const random = Math.floor(Math.random() * Math.floor(colors.length));
    return colors[random]; 
});

console.log(finalFinal);
return finalFinal; 
}

btnSelector.forEach((btn) => {
    const color = btn.classList[1];
    btn.addEventListener('click', () => selectorColor(color));
});


function selectorColor(color){
    console.log(color);

    //to break it after eight trys 
    if (hasGameEnded()){
        return;
    }

    //dom work
    const div = document.createElement('div'); 
    div.classList.add('selection-item'); 
    div.classList.add(color); 
    selectionSelector.appendChild(div); 
    selectedColors.push(color);
    if(selectedColors.length === 4){
    guesses ++;

    for(const selColor of selectedColors){
    const historyDiv = document.createElement('div'); 
    historyDiv.classList.add('history-item'); 
    historyDiv.classList.add(selColor); 
    hintsSelector.appendChild(historyDiv);

    //reset 
    resetButton.onclick = resetGame;
 



//to break it after 8 wrong try 
    if (guesses >= 9 || hasGameEnded()) {
        endGame();
        return;
      }

    if (hasGameEnded()) {
        return;
      }

    }
    const hintArray = calculateHints(selectedColors); 
        
    for(const hint of hintArray) {
    const el = document.createElement('div'); 
    if(hint === "full"){
        el.classList.add("full"); 
    }else{
        el.classList.add("half"); 
    }
    hintsSelector.appendChild(el);
    
}



    //hints lines
    const newLine = document.createElement('div');
    newLine.classList.add('hints-line');
    hintsSelector.appendChild(newLine);

    
    selectedColors.length = 0;
    selectionSelector.innerHTML = "";
    if(guesses > 8){
    } 


    //lose check 
    if (guesses === 8) {
        const loseMessage = document.createElement('div');
        loseMessage.textContent = 'You lose! The answer is:  ' + final.join(' ');
        

        // answers in the answer box 
        const finalAnswerElement = document.getElementById('final-answer');
        finalAnswerElement.appendChild(loseMessage);

        // Display the final answer 
        console.log(final);
        showFinalAnswer();
     
        //should exit the func
        return;
        
    }


    //win answer. 
    if(hintArray.every((hint) => hint === 'full') && hintArray.length === final.length){ 
        const winMessage = document.createElement('div');
        //winMessage.textContent = 'You win! The answer is:  ' + final.join(' ');
        

        //answer inside the answer box 
        const finalAnswerElement = document.getElementById('final-answer');
        finalAnswerElement.appendChild(winMessage);

        // Display the final answer
        console.log(final); 
        
        endGame();{
            winMessage.textContent = 'You win! The answer is:  ' + final.join(' ');  
        } //Exit the function
        
        showFinalAnswer();
        return;
        }
    }

} 

function calculateHints(colors) {
    const hints = []; 
    const dublicateCheck = []; 
     

colors.forEach((color, index) => {
    if(color === final[index]){
        hints.push("full");
        dublicateCheck.push(color);

    } 

});

colors.forEach((color, index) => {
    if(!dublicateCheck.includes(color) && final.includes(color)){
        hints.push("half");
    }

}); 
return hints; 
}


function getFinalAnswer(){
    return final;
}


// Update the display of final answer
const finalAnswerElement = document.getElementById('final-answer');
finalAnswerElement.textContent = getFinalAnswer().join('');


// end the game after 8 plays 
function endGame() {
    gameEnded = true;

  }
  function hasGameEnded() {
    return gameEnded;
  }


//reset button
  function resetGame() {
    // Clear the selection
    selectedColors.length = 0;
    selectionSelector.innerHTML = '';

    location.reload();
    // Clear the hints
    hintsSelector.innerHTML = '';
  
    // Reset the guesses count
    guesses = 0;
    gameEnded = false;
    final = randomFinal();
        

    finalAnswerElement.textContent = "";

    const winLoseMessage = document.querySelector('.win-lose-message');
     if (winLoseMessage) {
        winLoseMessage.remove();
    }

  }

