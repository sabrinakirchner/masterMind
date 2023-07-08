//selectors
const btnSelector = document.querySelectorAll('.item'); 
const selectionSelector = document.querySelector('.selection');
const hintsSelector = document.querySelector(".hints");


//vars
const colors = ['orange','pink','blue', 'green']; 
let final = randomFinal();
const selectedColors = [];
let guesses = 0;



//random 
function randomFinal(){
    const finalFinal = [...new Array(4)].map(color =>{
    const random = Math.floor(Math.random() * Math.floor(colors.length));
    return colors[random]; 
});

console.log(finalFinal);
    return finalFinal; 
}

btnSelector.forEach(btn => {
    const color = btn.classList[1];
    btn.addEventListener('click', () => selectorColor(color));
});


function selectorColor(color){
    console.log(color);
    
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
        loseMessage.textContent = 'You lose! The answer was: ' + final.join(' ');

        // answers in the answer box 
        const finalAnswerElement = document.getElementById('final-answer');
        finalAnswerElement.appendChild(loseMessage);

        console.log(final); // Display the final answer in the console
        showFinalAnswer();
        return;

    }


    //win answer. 
    if(hintArray.every((hint) => hint === 'full') && hintArray.length === final.length){ 
        const winMessage = document.createElement('div');
        winMessage.textContent = 'You win! The answer was: ' + final.join(' ');


        //answer inside the answer box 
        const finalAnswerElement = document.getElementById('final-answer');
        finalAnswerElement.appendChild(winMessage);
    
 
        console.log(final); // Display the final answer in the console
        showFinalAnswer();
        return; // Exit the function
    
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


