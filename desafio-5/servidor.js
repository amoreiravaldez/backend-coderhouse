/*

const http = require('http');

const server = http.createServer((req,res) => {
    res.end();
})

const PORT = 8080;

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
})

127.0.0.1 */

const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));
 
app.get('/', (req,res) => {
    res.send({mensaje: 'hola mundo'})
});

app.get('/productos', (req,res) => {
    res.send({mensaje: 'hola mundo'})
});

app.get('/productoRandom', (req,res) => {
    res.send({mensaje: 'hola mundo'})
});