import { Router } from "express"
import fs from "fs"

let items; 
fs.readFile("./data/marketItems.json", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    items = JSON.parse(data)
})

export default Router()
    .get("/", (req, res) => {
        res.json(items)
    })