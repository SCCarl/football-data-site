$(document).ready(function () {
    "use strict"

    dataService.getLeagueTable()
        .done(function (data) {
            var leagueData = new Array();

            $.each(data.standing, function (index, value) {
                leagueData.push({
                    position: value.position
                    , team: value.teamName
                    , played: value.playedGames
                    , w: value.wins
                    , d: value.draws
                    , l: value.losses
                    , points: value.points
                })
            });

            makeTable($(document.body), leagueData);
        });

    function makeTable(container, data) {
        var table = $("<table/>").addClass('CSSTableGenerator');
        var headerRow = $("<tr/>")

        $.each(data[0], function (key) {
            headerRow.append($("<th/>").text(key));
        })
        table.append(headerRow);

        $.each(data, function (i) {
            var row = $("<tr/>");
            $.each(data[i], function (key, value) {
                row.append($("<td/>").text(value));
            })
            table.append(row);
        });

        return container.append(table);
    };
});