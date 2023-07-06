require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.PWD_TOKEN;
const expire_time = process.env.JWT_EXPIRES_IN

// function untuk membuat token pada saat signin
function generateToken(dataUser = {}) {
    let token = jwt.sign(dataUser, secretKey, { expiresIn: expire_time });
    return token;
};

// function untuk mendapatkan data user dari bentuk token
function getUserData(token) {
    let decoded = jwt.verify(token, secretKey);
    return decoded;
};

module.exports = { generateToken, getUserData };
