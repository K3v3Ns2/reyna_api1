const express = require('express');
const router = express.Router();

//Consulta
router.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM agenda', (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
});

//Consulta ID
router.get('/id', (req, res) => {

    req.getConnection((err, conn) => {
        conn.query('SELECT ID_Agenda FROM agenda WHERE ID_Agenda = (SELECT MAX(ID_Agenda) FROM agenda)', (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).json(rows);
            console.log(rows);
        });
    })
})

//Insertar
router.post("/", (req, res) => {

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        conn.query('INSERT INTO agenda set ?', [req.body], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//Modificar
router.put("/mod", (req, res) => {

    req.getConnection((err, conn) => {
        var ID_Agenda = req.body.ID_Agenda;
        var ID_Mascota = req.body.ID_Mascota;
        var Fecha = req.body.Fecha;
        var Hora = req.body.Hora;

        conn.query("UPDATE agenda SET ID_Mascota= "+ID_Mascota+", Fecha= '"+Fecha+"', Hora= '"+Hora+"' WHERE ID_Agenda = " +ID_Agenda, (err,rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//Eliminar
router.delete("/del/:id", (req,res) => {
    req.getConnection((err,conn) => {
        var ID_Agenda = req.params.id;
        conn.query('DELETE FROM agenda WHERE ID_Agenda = ' +ID_Agenda, (err, rows) => {
            if(err){
                res.status(500).send(err);
                console.log(err)
            }
            res.status(200).send(rows);
        })
    })
});

module.exports = router;