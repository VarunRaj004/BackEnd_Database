const express = require ("express")
const app = express()


app.use(express.json())
const postsRouter = require("./routes/posts") 
app.use("/schedule",postsRouter)




app.listen(3001,() => {
    console.log("Server  Running")
})

