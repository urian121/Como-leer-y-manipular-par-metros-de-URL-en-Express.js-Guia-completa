const express = require("express");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 3050;

const app = express();
app.use(bodyparser.json());


app.get("/", (req, res) => {
    res.send("Bienvenidos..!");
});


/**
 * 🔥 Como acceder a los parámetros de una url en Express.js
☆ ¿Cómo crear rutas dinámicas en express?
*/
/**Extraer parametros de una URL con express */

app.get('/product/:id/:name', (req, res) => {
    const productId = req.params.id;
    const productName = req.params.name;
    res.send(`Product ID is: ${productId} and Product Name is: ${productName}`);
});


app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.get('/articles/:id', (req, res) => {

    const articleId = req.params.id;

    getArticleFromId(articleId, (error, user) => {
        if(error) return res.status(500).send(error);
        res.status(200).send(user);
    });
});


/**
 *  Ejemplo de una ruta dinámica en express usando múltiples parámetros
    Si deseamos por ejemplo extraer todos los comentarios realizados por un usuario en un articulo,
    podemos usar múltiples parámetros.
*/
 app.get('/articles/:articleId/comentarios/:userId',(req, res) => {

    const articleId = req.params.articleId;
    const userId = req.params.userId;

    leerComentarios(articleId, userId, (error, comments) => {
        if(error) return res.status(500).send(error);
        res.status(200).send(comments);
    });
});



//consultar por id
app.get("/listar/:id", (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM customers WHERE id = ${id}`

    connection.query(sql, (error, results)=>{
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else {
            res.send('Not result');
          }
    })
});


//actualizar
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, city } = req.body;
    const sql = `UPDATE customers SET name = '${name}', city='${city}' WHERE id =${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Customer updated!');
    });
  });

  //borrar por id
  app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM customers WHERE id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });
  

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));



