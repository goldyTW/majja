exports.catchError = (req, res) => {
    const err = req.err;
    console.log(err)
    if(err === undefined || err.code === undefined) return res.status(500).send({ "error": "Unknown Error" }), res.end();

    if(err.code !== undefined) return res.status(500).send({ "code": err.code, "errno": err.errno }), res.end();
}
