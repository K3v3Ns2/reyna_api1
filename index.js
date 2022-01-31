const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const morgan = require('morgan');
const myconn = require('express-myconnection');
const credential = require('./database');
const app = express()

//settings
app.set('port', process.env.PORT || 3030);

var cors = require('cors');
app.use(cors());


//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(myconn(mysql, credential,'single'));

//Routes
app.use('/usuarios', require('./routes/usuarios.routes'));
app.use('/mascotas', require('./routes/mascotas.routes'));
app.use('/agenda', require('./routes/agenda.router'));
app.use('/servicio', require('./routes/servicio.routes'));
app.use('/Registroventas', require('./routes/RegistroVenta.routes'));
//app.use('/Banco', require('./routes/BancoMartin.routes'));
app.use('/DatosAgenda', require('./routes/DatosAgenda.routes'));
//app.use('/Pago', require('./routes/BancoBanda.routes'));
app.use('/venta', require('./routes/ventas.routes'));

//Static files

//Starting the server
app.listen(app.get('port'), ()=>console.log(`App running on port: ${app.get('port')}`));