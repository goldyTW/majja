/*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
npm install --save midtrans-client*/

//SAMPLE REQUEST START HERE
import excuteQuery from "../../../../lib/db";
import NextCors from 'nextjs-cors';
import midtransClient from 'midtrans-client';
// Create Snap API instance

let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : 'SB-Mid-server-kSl2FRW6RUnjLEMQQrzLkCuS'
    });



// export default async function createnewcustomer(req, res) {
//     const {  } = req.body;

//     await NextCors(req, res, {
//         // Options
//         methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//         origin: '*',
//         optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//      });

//     try {
      
//         res.status(200).json({ result })
//     } catch (error) {
//         res.status(404).json({ error });
//     }
// }

let parameter = {
    "transaction_details": {
        "order_id": "1",
        "gross_amount": 10000
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "first_name": "budi",
        "last_name": "pratama",
        "email": "budi.pra@example.com",
        "phone": "08111222333"
    }
};

snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        console.log('transactionToken:',transactionToken);
    })