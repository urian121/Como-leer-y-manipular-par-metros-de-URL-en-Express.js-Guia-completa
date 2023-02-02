const express       = require("express");
const bodyparser    = require("body-parser");

const PORT = process.env.PORT || 3050;

const app = express();
app.use(bodyparser.json());


app.get("/", (req, res) => {
    res.send("Bienvenidos..!");
});


app.get('/cliente/:id', (req, res) => {
    const idCliente = req.params.id;
    res.send(`El id del cliente es: ${idCliente}`);
});


app.delete('/delete/:id', (req, res) => {
    //Usando Desestructuracion de objeto para obtener los parametros
    const { id } = req.params;
    const sql = `DELETE FROM customers WHERE id= ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Delete customer');
    });
});


app.get('/articulo/:nombre', (req, res) => {
    const nombre = req.params.id;
    tranformarNombre(nombre);
});


const tranformarNombre = (nombre='', (error) => {
    if (error) return res.status(500).send(error);
   
    //El método toUpperCase() no toma ningún parámetro.
    return res.status(200).send(nombre.toUpperCase());
});



/**
 * Extraer más de un parámetro
*/

app.get('/producto/:id/:nombre', (req, res) => {
    const productoId        = req.params.id;
    const productoNombre    = req.params.nombre;
    res.send(`Producto con ID: ${productoId} y el nombre es: ${productoNombre}`);
});


//Usando Desestructuracion
app.get('/alumno/:edad/:nombre', (req, res) => {
    const { edad, nombre} = req.params;

    res.send(`El alumno  ${nombre} tiene: ${edad} años`);
});


app.get('/articulo/:nombre/comentarios/:comentario', (req, res) => {

    const { nombre, comentario } =req.params;
    console.log(`El articulo: ${nombre} tiene el siguiente comentario: ${comentario}`);
});



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));



