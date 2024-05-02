const dotenv = require("dotenv");

dotenv.config({path:".env"});

const username = process.env.DB_USERNAME;
const pwd = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME;
const appname = process.env.APP_NAME
const mongodbURI = `mongodb+srv://${username}:${pwd}@${dbname}.b2okv4x.mongodb.net/?retryWrites=true&w=majority&appName=${appname}`;
module.exports = mongodbURI;
