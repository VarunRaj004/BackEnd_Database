
const mysql = require("mysql2/promise")


async function connectToDatabase() {
    try {
      const connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'V@run004',
        database : "airline_reservation_system",
      });

      return connection;

    } catch (err) {
        console.error("Error Connecting to Database")
    }
}

const db = connectToDatabase() ;

module.exports = db ;