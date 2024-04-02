document.getElementById("round1").innerHTML = Math.floor(Math.random() * 10)
document.getElementById("round2").innerHTML = Math.floor(Math.random() * 10)

// var index = 0;

function refresh(){
    document.getElementById("round1").innerHTML = Math.floor(Math.random() * 10)
    document.getElementById("round2").innerHTML = Math.floor(Math.random() * 10)
}

function check(){
    var round1 = parseInt(document.getElementById('round1').innerHTML)
    var round2 = parseInt(document.getElementById('round2').innerHTML)
    var user_guest = parseInt(document.querySelector('input').value)

    var sum = round1 + round2

    if (round1 + round2 == user_guest)
        alert('Congratulations!')
    else
        alert(`Incorret! The correct answer was: ${sum}`)
}