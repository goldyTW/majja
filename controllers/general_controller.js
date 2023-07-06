const utils = require('../src/utils');

module.exports.testAPI = async (req, res, next) => {
    utils.startRequest(req)
    try{

        let obj = {
            msg:'API PAYMENT GATEWAY',
            current_time: await utils.checkTime(),
            internet: await utils.checkInternet()
        }
        res.send(
            obj
        )

        utils.endRequest(req)
    }
    catch(e){
        console.log('error test API : ', e)
        res.status(500).send({
            error: e.toString()
        })
    }
}
