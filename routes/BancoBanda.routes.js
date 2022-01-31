const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', function(req, res){
    axios.post('https://deerbank.herokuapp.com/transfer/', {
        "destiny_account": "8934428703033035",
        "origin_account": req.body.origin_account,
        "exp_date": req.body.exp_date,
        "cvv": req.body.cvv,
        "ammount": req.body.ammount
    },
    {
        headers: {
            Authorization: "Token 7aaa62739442b685100659ce08dedab80d821757"
        }
    }).then(res => {
        console.log(res);
        console.log(res.data);
        return res.data;
    }).catch(error => {
        console.log(error.response.data)
    })
})

module.exports = router;