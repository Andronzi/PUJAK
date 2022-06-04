import express from "express"
import cors from "cors"
import sqlite3 from "sqlite3"

import userRouter from "./routes/user.js"

const sqliteApi = sqlite3.verbose()
const db = new sqliteApi.Database("./u.db", sqlite3.OPEN_READWRITE, err => {
    if (err) console.log(err);
})
db.run("CREATE TABLE IF NOT EXISTS users (id TEXT UNIQUE, points)")

const app = express()   
app.use(express.json({limit: '50mb'}))
    .use(cors())
    .use("/user", userRouter)
    .set("db", db)

const port = 8000
try {
    app.listen(port, () => {
        console.log(`Server has been started on port ${port}...`)
    })
} 
catch(e) {
    console.log(e)
    db.close()
}
