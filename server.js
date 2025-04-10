const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
 
const db = mysql.createConnection(
    {

        user:"root",
        host:"localhost",
        port:3306,
        password:"",
        database:"fogado"
    }
);



app.get("/", (req,res) => {

    const sql = "SELECT * FROM szobak";

    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result); 
    });
});


app.get("/potagy", (req,res) => {

    const sql = "SELECT * FROM szobak WHERE potagy='2'";

    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result); 
    });
});

app.get("/vendegek", (req,res) => {

    const sql = "SELECT * FROM vendegek ORDER BY irsz;";

    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result); 
    });
});





app.listen(1111, () => {
    console.log("fut a server 1111 porton");
});