let secretNumber = Math.trunc(Math.random() * 20) + 1;
let clickCounter = 20;
let highscorenum = 0;
document.querySelector('.clickCounter').textContent = clickCounter;
document.querySelector('.check').addEventListener('click', function() {
    let valueEntered = Number(document.querySelector('.inputsrc').value);
    console.log('button clicked',  valueEntered)
    if(valueEntered < secretNumber){
        document.querySelector('.stg').textContent = 'Lower';
        clickCounter--;
        document.querySelector('.clickCounter').textContent = clickCounter;
    } else if(valueEntered > secretNumber) {
        document.querySelector('.stg').textContent = 'Higher';
        clickCounter--;
        document.querySelector('.clickCounter').textContent = clickCounter;
    } else if(valueEntered === secretNumber) {
        document.querySelector('.reset').disabled = false;
        document.querySelector('.check').disabled = true;
        document.querySelector('.stg').textContent = 'Correct One...';
        document.querySelector('.test').textContent = 'Congratulations';
        document.querySelector('.secretNum').textContent = secretNumber;
        document.querySelector('.clickCounter').textContent = 'Got it after '+ (20 - clickCounter) +' Clicks';
        document.querySelector('.gamecontainer').style.background = 'yellowgreen';
        if(highscorenum == 0 && highscorenum < clickCounter) {
            highscorenum += clickCounter
        } else if(highscorenum < clickCounter){
            highscorenum = clickCounter
        }
        document.querySelector('.highscoreNum').textContent = highscorenum;

    }
    if(clickCounter === 0) {
        document.querySelector('.check').disabled = true;
        alert("you have reached maximum attenpts..!");

    }
});
document.querySelector('.reset').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    clickCounter = 20;
    document.querySelector('.check').disabled = false;
    document.querySelector('.reset').disabled = true;
    document.querySelector('.stg').textContent = 'Start Guessing..!';
    document.querySelector('.clickCounter').textContent = 20;
    document.querySelector('.gamecontainer').style.background = 'pink';
    document.querySelector('.inputsrc').value = '';
    document.querySelector('.test').textContent = 'Guess My Number';
    document.querySelector('.secretNum').textContent = '??';

})
