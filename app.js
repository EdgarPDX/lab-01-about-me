// import functions and grab DOM elements
import { countsAsAYes } from './function.js';

//Get elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('results');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener ('click', () =>{
    //Prompt to retreive users name
    const name = prompt('What is your name');
    
    //Confirms user wants to continue with test, 
    //if not return to page
    const confirmed = confirm(name + ', do you want to continue with the test?');
    if (!confirmed){
        return;
    }

    //Start score
    let score = 0;

    //Prompt y/n questions
    const enroll = prompt(name + ', is Edgar enrolled at Alchemy?');
    const cooking = prompt(name + ', does Edgar love cooking?');
    const graduated = prompt(name + ', has Edgar graduated?');

    //validating user input
    //console.log(enroll);
    //console.log(cooking);
    //console.log(graduated);
    if (countsAsAYes(enroll)) {
        score ++;
    }
    if (countsAsAYes(cooking)) {
        score ++;
    }
    if (countsAsAYes(graduated)) {
        score ++;
    }
    confirm(name + ', test is now complete. Check your score at bottom of page');

    result.textContent = name + ' YOU SCORED ' + score + '!';


}); 