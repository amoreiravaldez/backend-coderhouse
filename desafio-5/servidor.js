const fs = require("fs");
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

    getById(id) {
        try {
            productArray = JSON.parse(fs.readFileSync(this.nombreDelArchivo, "utf8"));
            let productById = productArray.find((product) => product.id == id);
            if (productById === undefined ) {return null } else { return productById};
        }
        catch (error) {
            console.log(error);
        }
    }

    getAll() {
        try {
            const productArray = JSON.parse(fs.readFileSync(this.nombreDelArchivo, "utf8"));
            return productArray;
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
    const productos = new Contenedor("productos.txt");
    res.send(productos.getAll());
});

app.get('/productoRandom', (req,res) => {
    //res.send({mensaje: 'hola mundo'})
});


