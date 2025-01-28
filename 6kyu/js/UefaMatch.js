// //TASK

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

/** Code */

function uefaEuro2016(teams, scores){
    const [team1,team2]= teams;
    const [score1, score2] = scores
    const result = score1 > score2 ? `${team1} won!` :
                   score2 > score1 ? `${team2} won!` :
                   "teams played draw.";
    return `At match ${team1} - ${team2}, ${result}`
}