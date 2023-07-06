'use strict';
const general = require('./general_routes');
const gateway1 = require('./gateway1_routes');



//########## start base path part
const _basepath = process.env.BASEPATH
console.log("basepath: ",typeof _basepath)
let basepath ="";
if(_basepath != "" && typeof _basepath != "undefined"){ //jika ada isinya
    basepath = "/" + _basepath;
    console.log("starting with basepath")
}
else if(typeof _basepath == "undefined" || _basepath == ""){ //jika gk ada isinya
    basepath = basepath;
    console.log("starting without basepath")
}
//########## end base path part



//export function part
module.exports = function (app) {
    app.use(basepath + '/general', general);
    app.use(basepath + '/gateway1', gateway1);
}