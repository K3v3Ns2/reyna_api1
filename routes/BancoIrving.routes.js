const express = require('express');
//const router = express.Router();
const axios = require('axios');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'Valores no pueden ser vacios'});
        return;
    }

    axios.post('https://api-bancoppel-transferencia.herokuapp.com/transacciones', {
        "IdTarjetaOrigen": "1111111111111",
        "IdTarjetaDestino": req.body.IdTarjetaDestino,
        "Cvv": req.body.Cvv,
        "TipoTransaccion": 3,
        "Motivo": "Prueba Servicio estetica",
        "Monto": req.body.Monto,
        "Fecha": req.body.Fecha
    }).then(res => {
        console.log(res);
        console.log(res.data);

        return res.data;
        console.log(res);
    }).catch(error => {
        console.log(error)
        console.log(error.data)
        return error
    })
}

/*router.post('/', function(req, res){
    axios.post('https://api-bancoppel-transferencia.herokuapp.com/transacciones', {
        "IdTarjetaOrigen": "1111111111111",
        "IdTarjetaDestino": req.body.IdTarjetaDestino,
        "Cvv": req.body.Cvv,
        "TipoTransaccion": 3,
        "Motivo": "Prueba Servicio estetica",
        "Monto": req.body.Monto,
        "Fecha": req.body.Fecha
    }).then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.EstadoTrans);

        /*if(res.data.EstadoTrans == 'Transaccion Completada'){
            res.status(200).send({
                message: "Transaction OK - Bancoppel"
            })
        }

        return res.data.EstadoTrans;
        console.log(res);
    }).catch(error => {
        console.log(error.response.data)
        return error.response.data
    })
})*/