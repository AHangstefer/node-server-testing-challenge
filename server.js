const express = require("express")
const cors = require("cors")
const router = require("./routers/router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/fruits, router")

server.get("/", (req, res)=> {
    res.json({
        message: "Let's get this server started in here"
    })
})

server.use((err, req, res, next)=> {
    console.log(err)
    res.status(500).json({
        message: "Something is wRoNggg"
    })
})

module.exports = server