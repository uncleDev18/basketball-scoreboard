let homeScoreEl = document.getElementById("homeScore-El")
let geustScoreEl = document.getElementById("guestScore-El")

let homeScore = 0;
let geustScore = 0;

function point1(whoScore)
{
    if(whoScore === 'home')
    {
        homeScore++;
        homeScoreEl.textContent = homeScore;
    }

    if(whoScore === 'guest')
    {
        geustScore++;
        geustScoreEl.textContent = geustScore;
    }
}

function point2(whoScore)
{
    if(whoScore == 'home')
    {
        homeScore += 2;
        homeScoreEl.textContent = homeScore;
    }

    if(whoScore === 'guest')
    {
        geustScore += 2;
        geustScoreEl.textContent = geustScore;
    }
}

function point3(whoScore)
{
    if(whoScore == 'home')
    {
        homeScore += 3;
        homeScoreEl.textContent = homeScore;
    }

    if(whoScore === 'guest')
    {
        geustScore += 3;
        geustScoreEl.textContent = geustScore;
    }
}

function newGame()
{
    homeScoreEl.textContent = homeScore = 0;
    geustScoreEl.textContent = geustScore = 0;
}
