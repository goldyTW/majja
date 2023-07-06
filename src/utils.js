

module.exports.getCurrentTimeSecond = () => {
    return Math.floor(new Date().getTime() / 1000);
}

module.exports.findEmpty = (arr, key) => {
    for (const element of key){
     if(!arr[element]) return element
    }
    return false;
}

module.exports.startRequest = (request) => {
    let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    let now = new Date();
    console.log("Start request "+ request.method+" for "+request.originalUrl +" from "+ ip + " - "+ now.toLocaleString("en-US", {timeZone: 'Asia/Jakarta'}))
}

module.exports.endRequest = (request) => {
    let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    let now = new Date();
    console.log("End request "+ request.method+" for "+request.originalUrl +" from "+ ip + " - "+ now.toLocaleString("en-US", {timeZone: 'Asia/Jakarta'}))
}

module.exports.checkTime = async () => {
    let time = this.getCurrentTimeSecond()
    return {
            time : time,
            humanTime: this.timestampToDate(time)
        }
}

module.exports.timestampToDate = (s) => {
    s = s * 1000
    let date = new Date(s);

    return (+date.getDate()+
            "/"+(date.getMonth()+1)+
            "/"+date.getFullYear()+
            "#"+date.getHours()+
            ":"+date.getMinutes()+
            ":"+date.getSeconds())
    
}

module.exports.makeid = (length) =>{
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.checkInternet= async () =>{
    return new Promise((resolve, reject) => {
        require('dns').resolve('www.google.com',(err, result) => {
            if (err) {
                return resolve({
                    msg: 'No connection', 
                    result: err.toString()
                 });
            }
            return resolve({
                msg: "Connected",
                result: result[0]
            })
        })
    })
}