const express = require('express');
const router = express.Router();

const Website = require('../models/website_mod');

router.get('/', (req, res) => {
    const websiteData = Website.all;
    res.send(websiteData);
});

module.exports = router;