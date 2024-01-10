const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "Mysql",
    password: "2615",
    database: "ashish",
    port: 3306,
  });

 
  con.connect(
        function(err) {
            if (err)
                console.log(err.message);
            else
            console.log("Database Connected");
        });
    
  module.exports = con;