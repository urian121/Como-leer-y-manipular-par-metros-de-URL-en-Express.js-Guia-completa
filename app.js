// Incluimos el modulo de express
const express = require("express");

// Establecemos un puerto en el cual nuestro servidor estará escuchando
const PORT = process.env.PORT || 3050;

// Creamos la aplicación de express con la función express()
const app = express();


app.get("/", (req, res) => {
    let texto = 'Aprendamos hoy como acceder a los parametros de una URL usando Express!';
    res.send(`<h1 style='color:#333; text-align:center;'>${texto} <hr></h1>`);
});


app.get('/cliente/:id', (req, res) => {
    console.log(req.params);
    
    const idCliente = req.params.id;
    res.send(`El id del cliente es: ${idCliente}`);
});

/**
 * Enviando parametros opcionales en una URL
*/
app.get('/lenguaje/:miParametroOpcional?', function (req, res) {
    const miParametro = req.params.miParametroOpcional || 'Sin parametros';
    res.send('El parametro opcional es: ' + miParametro);
});

app.delete('/borrar/:id?', (req, res) => {
    //Usando Desestructuracion de objeto para obtener los parametros
    const { id } = req.params;
    res.send(`El id para procesar es: ${id}`);
   /*
    const sql = `DELETE FROM customers WHERE id= ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Delete customer');
    });
    */
});


/**
 * Extraer más de un parámetro
*/

app.get('/producto/:id/:nombre', (req, res) => {
    const productoId = req.params.id;
    const productoNombre = req.params.nombre;
    res.send(`Producto con ID: ${productoId} y el nombre es: ${productoNombre}`);
});


//Usando Desestructuracion
app.get('/alumno/:edad/:nombre?', (req, res) => {
    const { edad, nombre } = req.params;

    res.send(`El alumno  ${nombre} tiene: ${edad} años`);
});


app.get('/articulo/:nombre/comentarios/:comentario', (req, res) => {

    const { nombre, comentario } = req.params;
    console.log(`El articulo: ${nombre} tiene el siguiente comentario: ${comentario}`);
});


// Nuestra aplicación estará escuchando en el puerto que definimos previamente
app.listen(PORT, () => 
    console.log(`Servidor corriendo en el puerto: ${PORT}`
));



