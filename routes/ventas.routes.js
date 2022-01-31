const express = require('express');
const router = express.Router();

//SELECT BY ID
router.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM venta WHERE ID_Venta = ?', [req.body], (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//INSERT
router.post("/", (req, res) => {

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        conn.query('INSERT INTO venta set ?', [req.body], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//DELETE
router.delete("/del/:id", (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.status(500).send(err);
        var id_venta = req.params.id
        console.log(id_venta);
        conn.query('DELETE FROM venta WHERE ID_Agenda = '+id_venta, (error, rows) =>{
            if(error){
                res.status(500).send(error.data);
                console.log(error);
            } 
            res.status(200).send(rows);
        } )
    })
})

module.exports = router;