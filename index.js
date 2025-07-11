const homeScore = document.getElementById("box-home")
const guestScore = document.getElementById("box-guest")

function plus1_home() {
    let currentScore = parseInt(homeScore.textContent);
    currentScore += 1;
    homeScore.textContent = currentScore;
}

function plus2_home() {
    let currentScore = parseInt(homeScore.textContent);
    currentScore += 2;
    homeScore.textContent = currentScore;
}

function plus3_home() {
    let currentScore = parseInt(homeScore.textContent);
    currentScore += 3;
    homeScore.textContent = currentScore;
}

function plus1_guest() {
    let currentScore = parseInt(guestScore.textContent);
    currentScore += 1;
    guestScore.textContent = currentScore;
}

function plus2_guest() {
    let currentScore = parseInt(guestScore.textContent);
    currentScore += 2;
    guestScore.textContent = currentScore;
}

function plus3_guest() {
    let currentScore = parseInt(guestScore.textContent);
    currentScore += 3;
    guestScore.textContent = currentScore;
}