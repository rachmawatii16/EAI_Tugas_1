async function fetchStandings() {
    try {
        const response = await fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=7bb48d593c5cb5b04e9714570ad66e6211126b8c1edfa04f4eee0ddc2e745bc7')
        const data = await response.json()
        return data;
    }catch(error) {
        console.error('Error :', error);
    }
}

async function fillStandingsTables() {
    const standingBody = document.getElementById('standings-body');
    const data = await fetchStandings();
    if (data) {

        data.forEach(teams => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${teams.team_name}</td>
            <td><img src="${teams.team_badge}" class="team-logo"> ${teams.team_name}</td>
            <td>${teams.overall_league_W}</td>
            <td>${teams.overall_league_D}</td>
            <td>${teams.overall_league_L}</td>
            
        `;
        standingBody.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fillStandingsTables();
});