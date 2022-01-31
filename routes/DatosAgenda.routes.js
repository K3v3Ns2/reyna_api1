const express = require('express');
const router = express.Router();

//SELECT ALL
router.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send(err);
        conn.query('SELECT * FROM DATOS_AGENDA', (err, rows) =>{
            if(err) return res.status(500).send(err);
            res.status(200).send(rows);
        })

    })
});

module.exports = router;