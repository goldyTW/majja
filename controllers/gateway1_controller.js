const utils = require('../src/utils');
const midtrans = require("../src/midtrans");

module.exports.snapCheckout = async (req, res, next) => {
    utils.startRequest(req)
    try{
        let payload = req.body;

        const empty = utils.findEmpty(payload, ['booking_id','amount','full_name','phone']);
        if (empty) throw new Error(`Parameter ${empty} is required`)

        let result = await midtrans.simpleCheckout(
            payload.booking_id,
            payload.amount,
            payload.full_name,
            payload.phone
        )
        res.send(result)
        utils.endRequest(req)
    }
    catch(e){
        console.log('error create snap token: ', e)
        res.status(500).send({
            error: e.toString()
        })
    }
}

module.exports.handlerTx = async (req, res, next) => {
    utils.startRequest(req)
    try{
        let payload = req.body;
        let result = midtrans.handlerTx(payload)
        res.send(result)
        utils.endRequest(req)
    }
    catch(e){
        console.log('error handler tx: ', e)
        res.status(500).send({
            error: e.toString()
        })
    }
}