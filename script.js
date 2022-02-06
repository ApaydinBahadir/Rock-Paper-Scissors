let buttons = document.querySelectorAll('button');
let info = document.querySelector('#info');
winCondution = [[0,2],[1,0],[2,1]];

let humanPoint = document.querySelector('#humanPoint');
var humanScore = 0;
let computerPoint = document.querySelector('#computerPoint');
var computerScore = 0;


function computerPlay(){
    return Math.floor(Math.random() * 3);
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        var computerValue = computerPlay();
        if(computerValue == button.value){
            info.textContent = 'You get draw';
            return;
        }
        if ((button.value == 0 && computerValue == 2) ||
        (button.value == 1 && computerValue == 0) ||
        (button.value == 2 && computerValue == 1)){
            info.textContent = 'Human wins';
            humanScore++;
            humanPoint.textContent = 'Human = '+humanScore;
            return;
        }
        else{
            info.textContent = 'Computer wins';
            computerScore++;
            computerPoint.textContent = 'Computer = '+computerScore;
            return;
        }
    })
})