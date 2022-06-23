class Usuario {

    constructor(nombre, apellido) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        let fullName = `${this.nombre} ${this.apellido}`;
        return fullName;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombreLibro, nombreAutor) {
        let libro = {};
        libro.nombre = nombreLibro;
        libro.autor = nombreAutor;
        this.libros.push(libro);
    }

    getBookNames() {
        return this.libros.map(function(item) { return item["nombre"]; });
    }
}

let usuario = new Usuario ('Alvaro', 'Moreira');

// Imprimo por consola el nombre completo del usuario
console.log(usuario.getFullName());


// Agrego dos mascotas al array con el método addMascota.
usuario.addMascota('Toto');
usuario.addMascota('Akira');

// Imprimo el número de mascotas del usuario con el método  countMascotas.
console.log(usuario.countMascotas());

// Agrego dos libros al array de libros con el método de addBook.
usuario.addBook('Nombre de Libro 1', 'Autor1');
usuario.addBook('Nombre2 de Libro 2', 'Autor2');

// Imprimo la totalidad de los nombres de libros del usuario con el método getBookNames (no devuelvo los autores).
console.log(usuario.getBookNames());