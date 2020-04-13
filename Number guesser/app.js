const min = 1;  // Mininmum Value
const max = 10; //Maximum Value
let guessesLeft = 3; //Total number of guesses
const winningNum =  getWinNum()// Winning Number
const container = document.querySelector('.container')
const button = document.getElementById('numberSubmit') 
const inputNum = document.getElementById('numberInput') 
const message = document.getElementById('message')

//Insert min and max in DOM
document.getElementById('min').textContent = min
document.getElementById('max').textContent = max

// Play Again
container.addEventListener('mouseup',function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload()
    }
})

//After clicking on button 
button.addEventListener('click',function(){
    //Get Input from User
    const input = inputNum.value
    if(input<min || input>max || isNaN(input)){
        setColMsg("The number is incorrect","red")
    }else if(input == winningNum){
        setColMsg("You Won!!!","green")
        inputNum.disabled = true
        button.value = "Play Again!!"
        button.className = "play-again"
    }else{
        guessesLeft = guessesLeft - 1
        if(guessesLeft===0){
            setColMsg(`The correct Number was ${winningNum} you lost!!`,"red")
            inputNum.disabled = true
            button.value = "Play Again!!"
            button.className = "play-again"
        }
        //After every iteration set value to none
        inputNum.value = ""

        //Set The message
        setColMsg(`Guesses Left: ${guessesLeft}`,"red")
    }
})

//Get Winning Number
function getWinNum(){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Set Color and message of Input
function setColMsg(msg,color){
    message.textContent = msg
    inputNum.style.borderColor = color
    message.style.color = color
}

