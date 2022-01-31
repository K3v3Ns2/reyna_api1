const express = require('express');
const router = express.Router();

//SELECT ALL
router.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM mascota', (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })

    })

});

//SELECT ONE
router.get('/:mascota', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query("SELECT * FROM mascota WHERE Nombre = '"+ req.params.mascota +"'", (err, rows) =>{
            if(err) return res.status(500).send(err.data);
            res.status(200).send(rows);
        })
    })
});
//SELCT ONE by ID
router.get('/id/:mascota', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query("SELECT * FROM mascota WHERE ID_Mascota = '"+ req.params.mascota +"'", (err, rows) =>{
            if(err) return res.status(500).send(err.data);
            res.status(200).send(rows);
        })
    })
});

//SELECT ID CLIENTE
router.get('/cliente/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query("SELECT ID_Cliente FROM mascota WHERE ID_Mascota = '"+ req.params.id +"'", (err, rows) =>{
            if(err){
                console.log(err);
                return res.status(500).send(err.data);
            }
            console.log(rows);           
            res.status(200).send(rows);
        })
    })
});

//INSERT
router.post("/", (req, res) => {

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        conn.query('INSERT INTO mascota set ?', [req.body], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//UPDATE
router.put("/mod", (req, res) => {

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send(err);
        conn.query("UPDATE mascota SET Nombre = '" +req.body.Nombre +"' , Raza = '" +req.body.Raza+ "', Especie = '"+req.body.Especie+"' , Edad = "+req.body.Edad+" WHERE ID_Mascota = "+req.body.ID_Mascota, (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})

//DELET
router.delete("/del", (req,res) => {
    req.getConnection((err,conn) => {
        var ID_Agenda = req.body.ID_Mascota
        conn.query('DELETE FROM mascota WHERE ID_Mascota = '+ID_Agenda, (err, rows) => {
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })
    })
})


module.exports = router;