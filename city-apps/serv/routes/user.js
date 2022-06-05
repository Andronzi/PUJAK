import { Router } from "express"
import { v4 } from "uuid" 

const createNewUserSql = "INSERT INTO users(id, points) VALUES (?, ?)"

function createUserSelector(strict = false) {
    return function (req, res, next) {
        if (req.query["id"]) {
            const db = req.app.get("db");
            const sql = `SELECT * FROM users WHERE id = '${req.query["id"]}'`
    
            db.get(sql, (err, match) => {
                if (err) {
                    res.send(err)
                } else if (match) {
                    req.user = match
                    next()
                } else {
                    res.sendStatus(404)
                }
            })
        } else if (!strict) {
            next()
        } 
    }
} 

export default Router()
    .get("/", [createUserSelector(), (req, res) => {
        if (!req.user) {
            const db = req.app.get("db");
            const [id, points] = [v4(), 0]
            db.run(createNewUserSql, [id, points])
            res.json({ id, points })
        } else {
            res.json(req.user)
        }
    }])
    .get("/update", [createUserSelector(true), (req, res) => {
        const db = req.app.get("db")
        let error = null
        console.log(req.query)
        if (req.query["method"] && req.query["target"] && req.query["value"]) {
            let sql;
            switch (req.query["method"]) {
                case "change":
                    sql = `UPDATE users SET ${req.query["target"]}=${+req.user[req.query["target"]] + +req.query["value"]} WHERE id='${req.user.id}'`
                    db.run(sql)
                    break;

                case "set":
                    sql = `UPDATE users SET ${req.query["target"]}=${req.query["value"]} WHERE id='${req.user.id}'`
                    db.run(sql)
                    break;

                default:
                    error = "Unknown method"
            }
        } else {
            error = "Invalid query"
        }

        if (error) {
            res.status(400).send(error)
        } else {
            res.sendStatus(200)
        }
    }])