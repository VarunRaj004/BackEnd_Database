const express = require ("express")
const app = express()

const mysql = require("mysql2/promise")

async function connectToDatabase() {
    try {
      const connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'V@run004',
        database : "airline_reservation_system",
      });

      const [rows, fields] = await connection.execute('SELECT * FROM airline_reservation_system.flight_schedule');
      console.log(rows);
      console.log(fields);

    } catch (err) {
        console.error("Error Connecting to Database")
    }
}

connectToDatabase() ;


app.listen(3001,() => {
    console.log("Server  Running")
})