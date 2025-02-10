let add1home = document.getElementById("add1point-home");
let add2home = document.getElementById("add2points-home");
let add3home = document.getElementById("add3points-home");

let add1guest = document.getElementById("add1point-guest");
let add2guest = document.getElementById("add2points-guest");
let add3guest = document.getElementById("add3points-guest");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


function plusOneHome() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
}

function plusTwoHome() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
}

function plusThreeHome() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
}


function plusOneGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
}

function plusTwoGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
}

function plusThreeGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
}