let player1Score = 0
let player2Score = 0
let player1Turn = true
let winning_score = 30


// object references for changing dom
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const dubBtn = document.getElementById("dubOrNoth")
const turnMessage = document.getElementById("message")
const guess = document.getElementById("guess_input")
const submit_button = document.getElementById("submit_guess_btn")

rollBtn.addEventListener("click", function(){
    let roll_outcome = Math.floor(Math.random() * 6) + 1
    if(player1Turn){
        console.log("Player 1 rolled a "+roll_outcome +"!")
        player1Turn = false
        player1Dice.innerHTML = roll_outcome
        player1Score += roll_outcome
        player1Scoreboard.innerHTML = player1Score
        if(player1Score >= winning_score){
            turnMessage.innerHTML="Player 1 won!"
        }
        else {
            turnMessage.innerHTML = "Player 2 turn"
        }
    }
    else{
        console.log("Player 2 rolled a "+roll_outcome +"!")
        player1Turn = true
        player2Dice.innerHTML = roll_outcome
        player2Score += roll_outcome
        player2Scoreboard.innerHTML = player2Score
        if(player2Score >= winning_score){
            turnMessage.innerHTML="Player 2 won!"
        }
        else {
            turnMessage.innerHTML = "Player 1 turn"
        }
    }
})

submit_button.addEventListener("click", function(){
    let roll_outcome = Math.floor(Math.random() * 6) + 1
    console.log("Guess: "+ guess.value)
    console.log("Roll outcome:" + roll_outcome)
    if(player1Turn){
        console.log("Player 1 rolled a "+roll_outcome +"!")
        player1Turn = false
        player1Dice.innerHTML = roll_outcome

        if(roll_outcome == guess.value){
            roll_outcome = 2*roll_outcome
        }
        else{
            roll_outcome = -1*roll_outcome
        }

        player1Score += roll_outcome
        player1Scoreboard.innerHTML = player1Score
        if(player1Score >= winning_score){
            turnMessage.innerHTML="Player 1 won!"
        }
        else {
            turnMessage.innerHTML = "Player 2 turn"
        }
    }
    else{
        
        console.log("Player 2 rolled a "+roll_outcome +"!")
        player1Turn = true
        player2Dice.innerHTML = roll_outcome
        player2Score += roll_outcome

        if(roll_outcome == guess.value){
            roll_outcome = 2*roll_outcome
        }
        else{
            roll_outcome = -1*roll_outcome
        }
        player2Score += roll_outcome
        player2Scoreboard.innerHTML = player2Score
        if(player1Score >= winning_score){
            turnMessage.innerHTML="Player 1 won!"
        }
        else {
            turnMessage.innerHTML = "Player 2 turn"
        }
    }
})

// dubBtn.addEventListener("click", function(){
// guess your roll to double your score or subtract the die roll from your total if incorrect guess
// })

resetBtn.addEventListener("click", function(){
    player1Score = 0
    player2Score = 0
    player1Scoreboard.innerHTML = 0
    player2Scoreboard.innerHTML = 0
    player1Dice.innerHTML = '-'
    player2Dice.innerHTML = '-'
})