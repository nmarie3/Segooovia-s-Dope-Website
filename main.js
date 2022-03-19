// JavaScript source code

document.querySelector('#answer').addEventListener('click', check)

function check() {

    const ash = document.querySelector('#ash').value
    const misty = document.querySelector('#misty').value
    const brock = document.querySelector('#brock').value
    const winner = ("YOU ARE CORRECT NOW YOU OWE ME 20,000 yen FOR THIS JAVASCRIPT")
    const loser = ("YOU SUCK TRY AGAIN")

    if (ash === "Ash Ketchup".toLowerCase() && misty === "Ann Chovy".toLowerCase() && brock === "Caesar Salad".toLowerCase()) {
        document.querySelector('#yesNo').innerText = winner
    }else{
        document.querySelector('#yesNo').innerText = loser
    }
}