const express = require('express'),
    pgp = require('pg-promise')(),
    router = express.Router(),
    dotenv = require('dotenv').config();
    db = pgp({
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });


module.exports = router;