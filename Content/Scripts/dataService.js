var dataService = function () {

    getLeagueTable = function () {
        return $.ajax({
            headers: {
                'X-Auth-Token': 'ada6d06e195c46b08bd683a0aaab34e8'
            }
            , url: 'http://api.football-data.org/v1/soccerseasons/398/leagueTable'
            , dataType: 'json'
            , type: 'GET'
        });
    };

    return {
        getLeagueTable: getLeagueTable
    };
}();
