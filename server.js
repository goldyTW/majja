require('dotenv').config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.urlencoded({
    extended: true,
    strict: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials","true");
    next();
});
app.use(express.static('uploads'));
app.set('trust proxy', true);

app.set('views', 'views');
app.set('view engine', 'ejs');

var routes = require('./routes/index');
routes(app);


if(process.env.DEPLOY_TYPE != "lambda" ){
    //non serverless
    app.listen(port);
    console.log('RESTful API server started on: ' + port);
}
else{
    // serverless
    const serverless = require('serverless-http'); 
    console.log('Running on lambda', process.env.STAGE)
    const serverlesswrap = serverless(app); // comment for manual deployment
    module.exports.handler =  async (event, context) => {
        return await serverlesswrap(event, context)
    }
}
