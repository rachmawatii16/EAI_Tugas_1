async function fetchCompetitionData() {
    try {
        const response = await fetch('https://apiv3.apifootball.com/?action=get_leagues&country_id=5&APIkey=7bb48d593c5cb5b04e9714570ad66e6211126b8c1edfa04f4eee0ddc2e745bc7')
        const data = await response.json();
        return data;
    }catch(error) {
        console.error('Error :', error);
    }
}

async function fillCompetitionTables() {
    const competitionBody = document.getElementById('competition-body');
    const data = await fetchCompetitionData();

    if (data) {

        data.forEach(country => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${country.country_name}</td>
            <td><img src="${country.league_logo}" class="league-logo"> ${country.league_name}</td>
            <td>${country.league_name}</td>
            <td>${country.league_season}</td>
        `;
        competitionBody.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fillCompetitionTables();
});