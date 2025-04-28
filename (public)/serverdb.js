const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { Script } = require('vm');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',   
  database: 'seguritymz'
});

db.connect(error => {
  if (error) throw error;
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener todos los productos
app.get('/api/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ruta para obtener un producto por ID
app.get('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


app.get('/api/productos/:id', (req, res) => {
    const productoId = req.params.id;
    db.query('SELECT * FROM productos WHERE id = ?', [productoId], (err, results) => {
      if (err) {
        console.error('Error en la consulta:', err);
        res.status(500).json({ error: 'Error en la consulta' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Producto no encontrado' });
        return;
      }
      res.json(results[0]);
    });
  });
  
  
  