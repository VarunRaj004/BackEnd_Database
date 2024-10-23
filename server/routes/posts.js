const express = require('express')
const router = express.Router()

const dbPromise = require('../db')


router.get('/list',async (req,res) => {
    const db = await dbPromise
    const sql = "SELECT * FROM flight_schedule"
    const [rows,fields] = await db.execute(sql)
    res.json(rows)
})

router.post('/', async (req,res) => {
    const db = await dbPromise
    const {Schedule_ID,Route_ID,Airplane_ID,Departure_time,Arrival_time} = req.body 
    const sql = "INSERT INTO flight_schedule (Schedule_ID,Route_ID,Airplane_ID,Departure_time,Arrival_time) VALUES (?,?,?,?,?)"
    console.log("Entered")
    await db.execute(sql,[Schedule_ID,Route_ID,Airplane_ID,Departure_time,Arrival_time])

});



module.exports = router 