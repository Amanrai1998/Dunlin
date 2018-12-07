const express = require("express");
const router = express.Router({mergeParams: true});
const helpers = require('../helpers/message');

router.post('/', helpers.createMessage);

module.exports = router;