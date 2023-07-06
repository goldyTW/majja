const utils = require('./utils');
const midtransClient = require('midtrans-client');

const isProduction = JSON.parse(process.env.IS_PRODDUCTION);
const stage = process.env.STAGE;
const SERVER_KEY = process.env.SERVER_KEY;
const CLIENT_KEY = process.env.CLIENT_KEY;
const DEFAULT_ITEM_NAME = process.env.DEFAULT_ITEM_NAME;
const DEFAULT_ITEM_QTY  = Number(process.env.DEFAULT_ITEM_QTY);

console.log(SERVER_KEY)
module.exports.simpleCheckout = async(
    booking_id,
    amount,
    full_name,
    phone
) =>{
    let snap = new midtransClient.Snap({
        isProduction : isProduction,
        serverKey : SERVER_KEY,
        clientKey : CLIENT_KEY
    });

    let first_name = full_name.split(' ').slice(0, -1).join(' ');
    let lastname_name = full_name.split(' ').slice(-1).join(' ');
    booking_id = booking_id.toString()
    phone = phone.toString()
    amount = Number(amount)

    let order_id = `${stage}#${booking_id}#-${utils.makeid(6)}-${utils.getCurrentTimeSecond()}`

    let parameter = {
        "transaction_details": {
            "order_id": order_id,
            "gross_amount": Number(amount)
        },
        "item_details": [{
            "id": booking_id,
            "quantity": DEFAULT_ITEM_QTY,
            "price": Number(amount),
            "name": DEFAULT_ITEM_NAME,
        }],
        "customer_details": {
            "first_name": first_name,
            "last_name": lastname_name,
            "phone": phone

        },
        "credit_card":{
            "secure" : true
        }
    };
    
    let result = await snap.createTransaction(parameter)
    return {
        token: result.token,
        url: result.redirect_url,
        clientKey: snap.apiConfig.clientKey
    }
}

module.exports.handlerTx = async(obj) =>{
    let core = new midtransClient.CoreApi({
        isProduction : isProduction,
        serverKey : SERVER_KEY,
        clientKey : CLIENT_KEY
    });

    let transactionStatusObject = await core.transaction.notification(obj)

    let orderId = transactionStatusObject.order_id;
    let booking_id = (orderId.split("#"))[1]
    let transactionStatus = transactionStatusObject.transaction_status;
    let fraudStatus = transactionStatusObject.fraud_status;

    let result = {
        orderId: orderId,
        booking_id: booking_id,
        transactionStatus: transactionStatus,
        fraudStatus: fraudStatus
    }
    console.log(result)
}