var mysql = require('mysql');
connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function(err){
    if(err){
        console.error("error connection: " + err.stack);
        return;
    }
    console.log('connection id : ' + connection.threadID);
});
module.exports = connection;