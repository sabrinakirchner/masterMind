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
    const finalFinal = [...new Array(3)].map(color =>{
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
    
    //dom WORK
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

    selectedColors.length = 0;
    selectionSelector.innerHTML = "";
    if(guesses > 7){
    alert('you lose!');
    } 

    if(hintArray.every(hint === 'full') && hintArray.length === final.length){ 
    alert('you win'); 
    
        }
    }

} 

function calculateHints(colors) {
    const hints = []; 
    const dublicateCheck = []; 

    colors.forEach((color, index) => {
    if(final[index] === color){
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


