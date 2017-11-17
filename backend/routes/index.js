const express = require('express'),
    pgp = require('pg-promise')(),
    router = express.Router(),
    dotenv = require('dotenv').config();
    db = pgp('postgres://readonly_user:turner@aws-us-east-1-portal.27.dblayer.com:25183/titles');    

router.get('/titles', function(req, res) {

    db.query('SELECT id, title_name AS name, release_year as year FROM title ORDER BY title_name_sortable')
    .then(data => {
        // console.log(data);
        data = data.filter(function(title) {
            // console.log(title.name);
            return title.name.endsWith('(Part 2)') === false;
        }).map(function(title) {
            // console.log(title.name);
            title.name = title.name.replace('(Part 1)', '');
            return title;
        });
        console.log(data)
        res.json({data});
    })
    .catch(error => {
        console.log(error);
        res.json({error});
    })

});

router.get('/fullinfo/:id', function(req, res) {
    let titleID = req.params.id;
    db.task('fullinfo', t => {
        return t.batch([
            t.any('SELECT title_name AS name, release_year AS year FROM title WHERE title.id = $1', titleID),
            t.any('SELECT genre.name AS genre FROM title, title_genre, genre WHERE title_genre.title_id = $1 AND title.id = $1 AND title_genre.genre_id = genre.id', titleID),
            t.any('SELECT storyline.type AS source, storyline.description AS description FROM title, storyline WHERE title.id = $1 AND title.id = storyline.title_id', titleID),
            t.any('SELECT participant.name AS name FROM title, title_participant, participant WHERE title.id = $1 AND title.id = title_participant.title_id AND title_participant.participant_id = participant.id', titleID),
            t.any('SELECT award.award AS award, award.award_year AS year, award.award_won AS won FROM title, award WHERE title.id = $1 AND title.id = award.title_id GROUP BY award, year, won ORDER BY year', titleID),
            t.any('SELECT other_name.title_name AS alt_title, other_name.title_name_language AS language FROM title, other_name WHERE title.id = $1 AND title.id = other_name.title_id', titleID)
        ]);
    })
    .then(data => {
        res.json({
            title: data[0][0].name,
            year: data[0][0].year,
            genres: data[1],
            stories: data[2],
            participants: data[3],
            awards: data[4],
            altTitles: data[5]
        });
    })
    .catch(error => {
        res.json({error});
    })
})

module.exports = router;