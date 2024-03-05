import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg'


const db = new pg.Client({
    user:"postgres",
    name:"localhost",
    password:"Dhiman@23",
    database:"userInfo",
    port:5432
})
db.connect()

const app = express()
const port = 5000
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",async (req,res)=> {
    const response = await db.query("SELECT * FROM userLogininfo")
    res.json(response.rows)
})

app.post("/api/user", async (req,res) => {
    const {username, email, userpassword} = req.body
    const response = await db.query("INSERT INTO userLogininfo (username, email, userpassword) VALUES ($1, $2,$3)",[username, email, userpassword])
    console.log(response.rows)
    res.status(201).send('User registered successfully');
})

// app.get("/user", async  (req,res)=> {
//     const response = await db.query("SELECT * FROM userLogininfo")
//     console.log(response.rows)
//     // db.end()
// })

app.listen(port, ()=> {
    console.log(`server runninbg on ${port}`)
})