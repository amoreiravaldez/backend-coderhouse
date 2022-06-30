const fs = require("fs");
let productArray = [];
let productObject = {};
const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));

// Clase contenedor

class Contenedor {  
    constructor(nombreDelArchivo) {
        this.nombreDelArchivo = "./" + nombreDelArchivo;
    }

    async getById(id) {
        try {
            productArray = JSON.parse(await fs.promises.readFile(this.nombreDelArchivo, "utf8"));
            let productById = productArray.find((product) => product.id == id);
            if (productById === undefined ) {return null } else { return productById};
        }
        catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            productArray = JSON.parse(await fs.promises.readFile(this.nombreDelArchivo, "utf8"));
            console.log(productArray)
        }
        catch (error) {
            console.log(error);
        }
    }
}

app.get('/', (req,res) => {
    res.send(`<h1>Bienvenido a mi nuevo servidor express en el puerto ${PORT}</h1>`);
});

app.get('/productos', (req,res) => {
    const Productos = new Contenedor("productos.txt");
    res.send(Productos.getAll());
});

app.get('/productoRandom', (req,res) => {
    //res.send({mensaje: 'hola mundo'})
});


