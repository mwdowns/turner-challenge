const express = require('express'),
    pgp = require('pg-promise')(),
    router = express.Router(),
    dotenv = require('dotenv').config();
    db = pgp('postgres://readonly_user:turner@aws-us-east-1-portal.27.dblayer.com:25183/titles');    

router.get('/titles', function(req, res) {

    db.query('SELECT id, title_name AS name, release_year as year FROM title ORDER BY title_name_sortable')
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        console.log(error);
        res.json({error});
    })

});

router.get('/genre/:id', function(req, res) {
    let titleID = req.params.id;
    console.log(titleID)

    db.query('SELECT genre.name AS genre FROM title, title_genre, genre WHERE title_genre.title_id = 610 AND title.id = $1 AND title_genre.genre_id = genre.id', titleID)
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        res.json({error});
    })
})

router.get('/storyline/:id', function(req, res) {
    let titleID = req.params.id;

    db.query('SELECT storyline.type AS source, storyline.description AS description FROM title, storyline WHERE title.id = $1 AND title.id = storyline.title_id', titleID)
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        res.json({error});
    })
})

router.get('/participants/:id', function(req, res) {
    let titleID = req.params.id;

    db.query('SELECT participant.name AS name FROM title, title_participant, participant WHERE title.id = $1 AND title.id = title_participant.title_id AND title_participant.participant_id = participant.id', titleID)
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        res.json({error});
    })
})

router.get('/awards/:id', function(req, res) {
    let titleID = req.params.id;

    db.query('SELECT award.award AS award, award.award_year AS year, award.award_won AS won FROM title, award WHERE title.id = 610 AND title.id = award.title_id GROUP BY award, year, won ORDER BY year', titleID)
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        res.json({error});
    })
})

router.get('/alt_titles/:id', function(req, res) {
    let titleID = req.params.id;

    db.query('SELECT other_name.title_name AS alt_title, other_name.title_name_language AS language FROM title, other_name WHERE title.id = $1 AND title.id = other_name.title_id', titleID)
    .then(data => {
        res.json({data});
    })
    .catch(error => {
        res.json({error});
    })
})


module.exports = router;