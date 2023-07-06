const express = require('express')
const router = express.Router()
const { catchError } = require('../helpers/catchError')
const gateway1 = require('../controllers/gateway1_controller')

router.post("/snap/checkout", gateway1.snapCheckout,catchError);
router.post("/snap/handler", gateway1.handlerTx,catchError);

module.exports = router;