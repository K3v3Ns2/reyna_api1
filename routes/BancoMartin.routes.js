const express = require('express');
const router = express.Router();
const axios = require('axios');

//INSERT TO RESTAURACIONES
router.post('/', function (req, res) {
    axios.post('http://189.173.151.83:8000/Routes/prestamos', {
        nombre: req.body.nombre,
        importe: req.body.importe,
        motivo: req.body.motivo,
        numCuenta: req.body.numCuenta
    }).then(res => {
        console.log(res);
        console.log(res.data);
    })
})
module.exports = router;