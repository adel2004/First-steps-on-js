var i = 0;
var j = 0;
var k = 0;
var h = 0;

document.addEventListener("keypress", function(event) {
    dice(event.key);
});

function dice(key) {
    if (key === "Enter" && i < 10 && j < 10 && k<3 && h<3) {
        var x = Math.floor(Math.random() * 6) + 1;
        var y = Math.floor(Math.random() * 6) + 1;

        document.querySelectorAll("img")[0].setAttribute("src", "images/dice" +x+ ".png");
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice" +y+ ".png");

        if (x > y) {
            document.querySelector("h1").innerHTML = "Player 1 wins";
            document.querySelectorAll("h1")[3].innerHTML = ++i;
        } else if (x < y) {
            document.querySelector("h1").innerHTML = "Player 2 wins";
            document.querySelectorAll("h1")[5].innerHTML = ++j;
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
    else if (i === 10 && k < 3 && k < 3) {
            document.querySelector("h1").innerHTML = "Player 1 Wins this round!";
            document.querySelectorAll("h1")[2].innerHTML = ++k;
            i = 0;
            j = 0;
            document.querySelectorAll("h1")[3].innerHTML = i;
            document.querySelectorAll("h1")[5].innerHTML = j;
        } 
    else if (j === 10 && h < 3 && k < 3) {
            document.querySelector("h1").innerHTML = "Player 2 Wins this round!";
            document.querySelectorAll("h1")[4].innerHTML = ++h;
            j = 0;
            i = 0;
            document.querySelectorAll("h1")[3].innerHTML = i;
            document.querySelectorAll("h1")[5].innerHTML = j;
    }

    if (k === 3) {
        document.querySelector("h1").innerHTML = "Player 1 Wins the game!";
    } else if (h === 3) {
            document.querySelector("h1").innerHTML = "Player 2 Wins the game!";
    }
    
}

