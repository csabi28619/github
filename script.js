const solution = Math.floor(Math.random() * 100) + 1

const guessEl = document.getElementById("guess")

function TipClicked(){
    let guess = guessEl.value * 1

    if(guess <solution)
    {
        alert("nigga")
    }
}