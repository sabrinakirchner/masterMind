MasterMind Game

This project was made by me for my software development classes, this is a game for middle cahoot at perScholas. 

In this game the user makes color selections, with the objective to get the four right colors, in the right positions. The game has the purple that will tell you if you put any color in the right position and has the clear gree that will tell if that colors are in the right colors but not in the right place. 




Selectors 
btnSelector: select the buttons colors.

selectionSelector: Select the eleent where the user-selected colors will be display. 

hintsSelector: select the elements where the hinst will be displayed. 

resetButton: select the reset button. 



Variables
Colors: Array of variable colors. 

Final: Stores randomly generated final answer 

SelectedColors: Array to store the colors selected by the user. 

Guesses: Counter for the number og guesses made by the user. 

RandomFinal() func: Adds a click event listener to each button, when the button is click, selectColors() func is caled. 

Event listerner: Adds click event listener to each color button when is clicked. 

SelectColor(color) Func: handle color when a button is clicked, the selectColor() func is called. 




Dom 
Adds selected color to the selectColors array and display it in the selection

check if the user has made all four color selections and proceeds with the game logic. 

Calculates the hints based on the selected colors and dicplays them. 

check for win or lose conditions and handles the game outcome. 

calculateHints(color) func: Calculates the hints based on the selected 

colors and final answers. 

Uses the colors array and final array to determine the hints. 

return an array of hints ('full' or 'half').

getFinalAnswer() func: Return the final Answer. 


Display final answer 
display the final answer: Updates the text content of the finalAnswerElement with the joined final answer. 


End Games 
endGame() func: sets the gameEnded flag to true to indicate that the game has ended. 

hasGameEnded() func: Return the value of the gameEnded flag. 

resetGame() func: handle the reset logic when the reset button is clicked. 

clears the selected colors and selection area. 



Reset 
Reload the game and reset it. 

Clears the hints, reset the guess count, and generates a new final answer. 

Clears the final answer. 



























