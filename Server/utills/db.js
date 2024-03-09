import mysql from "mysql"

// Database Connection MYSQL
const con=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employeems',
    // connectionLimit:10,
     port: 3300
})

con.connect(function(err) {
    if(err) {     
        console.log("Connection error")
    }else{
        console.log("connected")
    }
      
})

export default con;