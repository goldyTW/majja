const express = require('express')
const router = express.Router()
const { catchError } = require('../helpers/catchError')
const general = require('../controllers/general_controller')

router.get("/test", general.testAPI,catchError);

module.exports = router;