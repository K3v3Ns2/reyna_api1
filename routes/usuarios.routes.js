const express = require('express');
const router = express.Router();

//SELECT ALL
router.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM cliente', (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
    
});

//SELECT ONE
router.get('/one/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query("SELECT * FROM cliente WHERE ID_Cliente = '"+ req.params.id +"'", (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).json(rows);
        })
    })
});

//INSERT
router.post("/", (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        conn.query('INSERT INTO cliente set ?', [req.body], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

//UPDATE
router.put("/upd", (req, res) => {

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        var ID_Cliente = req.body.ID_Cliente;
        var Nombre = req.body.Nombre;
        var Direccion = req.body.Direccion;
        var Telefono = req.body.Telefono;
        conn.query("UPDATE cliente SET Nombre = '"+Nombre+"', Direccion = '"+Direccion+"', Telefono = '"+Telefono+"' WHERE ID_Cliente = "+ID_Cliente, (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

//DELETE
router.delete("/del", (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM cliente WHERE ID_Cliente = '+req.body.ID_Cliente, (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

module.exports = router;