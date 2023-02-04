const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routes')
const mysqlConnection = require('./database/Sqlconnect')

const corsOptio = {
    credentials: true,
    origin: ["http://localhost:3000"]
}
app.use(cors(corsOptio))
app.use(express.json());
app.use(routers)

const port = 5000
app.listen(port, () => {
    console.log(`Server running on ${port}!`)
})
