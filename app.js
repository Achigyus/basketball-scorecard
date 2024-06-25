let homeScores = document.getElementById('basketball_score_count_home')
let guestScores = document.getElementById('basketball_score_count_guest')

let increaseHomeScoreBy1 = document.getElementById('basketball_score_plus_one_home')
let increaseHomeScoreBy2 = document.getElementById('basketball_score_plus_two_home')
let increaseHomeScoreBy3 = document.getElementById('basketball_score_plus_three_home')

let increaseGuestScoreBy1 = document.getElementById('basketball_score_plus_one_guest')
let increaseGuestScoreBy2 = document.getElementById('basketball_score_plus_two_guest')
let increaseGuestScoreBy3 = document.getElementById('basketball_score_plus_three_guest')

let newGameBtn = document.getElementById('new_game_btn')

let handleClick = (e) => {
    // console.log(e)
    let team = e.target.id
    let value = Number(e.target.innerText)
    if (team.includes('guest')) {
        guestScores.innerText = Number(guestScores.innerText) + value
    } else {
        homeScores.innerText = Number(homeScores.innerText) + value
    }
    // console.log(team.includes('guest'))
    // console.log(value)

}

let startNewGame = () => {
    guestScores.innerText = 0
    homeScores.innerText = 0
}

increaseGuestScoreBy1.addEventListener('click', handleClick)
increaseGuestScoreBy2.addEventListener('click', handleClick)
increaseGuestScoreBy3.addEventListener('click', handleClick)

increaseHomeScoreBy1.addEventListener('click', handleClick)
increaseHomeScoreBy2.addEventListener('click', handleClick)
increaseHomeScoreBy3.addEventListener('click', handleClick)

newGameBtn.addEventListener('click', startNewGame)