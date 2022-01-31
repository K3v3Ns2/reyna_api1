const express = require('express');
const router = express.Router();


//SELECT ALL
router.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM servicio', (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

//SELECT ONE
router.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM servicio WHERE ID_Servicio = ?', [req.body], (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

//INSERT
router.post("/", (req, res) => {
    req.getConnection((err, conn)=>{
        if(err){
            message: err;
            return res.status(500).send(message);
            console.log(message);
        } 
        conn.query('INSERT INTO servicio set ?', [req.body], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

module.exports = router;