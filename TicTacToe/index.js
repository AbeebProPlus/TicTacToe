const header = document.querySelector(".winner")
const parentBox = document.querySelector(".box-parent")
const childBox = document.querySelectorAll(".box")
const restart = document.querySelector(".restart-btn")
let x = 0


restart.addEventListener("click", () => {
    location.reload()
})

function increaseX(){
    x = x + 1
}

function boxFunction(){
    for (const box of childBox){
        box.addEventListener("mouseenter", () => {
            box.classList.add("toggle-child-box-over")
        })
        box.addEventListener("mouseleave", () => {
            box.classList.remove("toggle-child-box-over")
        })
        box.addEventListener("click", () => {
            increaseX()
            if (x % 2 == 0){
                game("O", box, header, "white", "one")
                box.setAttribute("disabled", "true")
            }else if (x % 2 == 1){
                game("X", box, header, "yellow", "two")
                box.setAttribute("disabled", "true")
            }
            determineWinner()
        })
    }
}

function game(game, bx, hx, color, playerNum){
    bx.innerHTML = game
    bx.pointerEvents = "none"
    bx.style.color = color
    hx.innerHTML = "Waiting for player " + playerNum
}

function endGame(){
    for (const box of childBox){
        box.style.pointerEvents = "none"
    }
    parentBox.style.border = "10px solid gold"
}

function winnersBox(box1, box2, box3){
    box1.classList.add("winners-box")
    box2.classList.add("winners-box")
    box3.classList.add("winners-box")
}

function determineWinner(){
    if (childBox[0].innerHTML == "O" && childBox[1].innerHTML == "O" && childBox[2].innerHTML == "O"){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[0], childBox[1], childBox[2])
        endGame()
    }else if (childBox[3].innerHTML == "O" && childBox[4].innerHTML == "O" && childBox[5].innerHTML == "O"){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[3], childBox[4], childBox[5])
        endGame()
    }else if ((childBox[6].innerHTML == "O" && childBox[7].innerHTML == "O" && childBox[8].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[6], childBox[7], childBox[8])
        endGame()
    }else if ((childBox[0].innerHTML == "O" && childBox[4].innerHTML == "O" && childBox[8].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[0], childBox[4], childBox[8])
        endGame()
    }else if ((childBox[2].innerHTML == "O" && childBox[4].innerHTML == "O" && childBox[6].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[2], childBox[4], childBox[6])
        endGame()
    }
    else if ((childBox[0].innerHTML == "O" && childBox[3].innerHTML == "O" && childBox[6].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[0], childBox[3], childBox[6])
        endGame()
    }
    else if ((childBox[2].innerHTML == "O" && childBox[5].innerHTML == "O" && childBox[8].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[2], childBox[5], childBox[8])
        endGame()
    }else if ((childBox[1].innerHTML == "O" && childBox[4].innerHTML == "O" && childBox[7].innerHTML == "O")){
        header.innerHTML = "Player one won!"
        winnersBox(childBox[1], childBox[4], childBox[7])
        endGame()
    }else if ((childBox[0].innerHTML == "X" && childBox[1].innerHTML == "X" && childBox[2].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[0], childBox[1], childBox[2])
        endGame()
    }else if (childBox[3].innerHTML == "X" && childBox[4].innerHTML == "X" && childBox[5].innerHTML == "X"){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[3], childBox[4], childBox[5])
        endGame()
    }else if ((childBox[6].innerHTML == "X" && childBox[7].innerHTML == "X" && childBox[8].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[6], childBox[7], childBox[8])
        endGame()
    }else if ((childBox[0].innerHTML == "X" && childBox[4].innerHTML == "X" && childBox[8].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[0], childBox[4], childBox[8])
        endGame()
    }else if ((childBox[2].innerHTML == "X" && childBox[4].innerHTML == "X" && childBox[6].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[2], childBox[4], childBox[6])
        endGame()
    }else if ((childBox[0].innerHTML == "X" && childBox[3].innerHTML == "X" && childBox[6].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[0], childBox[3], childBox[6])
        endGame()
    }else if ((childBox[2].innerHTML == "X" && childBox[5].innerHTML == "X" && childBox[8].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[2], childBox[5], childBox[8])
        endGame()
    }else if ((childBox[1].innerHTML == "X" && childBox[4].innerHTML == "X" && childBox[7].innerHTML == "X")){
        header.innerHTML = "Player two won!"
        winnersBox(childBox[1], childBox[4], childBox[7])
        endGame()
    }
}

boxFunction()