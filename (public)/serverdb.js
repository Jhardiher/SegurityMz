const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const router= express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // para servir imágenes si es necesario

// Conexión a MySQL
const connection  = mysql.createConnection({
  host: '185.236.182.93',
  user: 'jhardiher_giraldo',
  password: '1006663004',   
  database: 'jhardiher_giraldo',
  port: 3306
});

// Verificar conexión
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a MySQL:', error);
    return;
  }
  console.log('Conectado a MySQL con éxito.');
});

// Endpoint para todos los productos
app.get('/', (req, res) => {
  connection.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      res.status(500).send('Error en la base de datos');
      return;
    }
    res.json(results);
  });
});

// Endpoint para un producto específico por ID
app.get("/producto/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT nombre, descripcion, precio, imagen_url FROM productos WHERE id_producto = ?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Error al consultar producto" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// Endpoint para registrar usuario
app.post('/registro', (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
  connection.query(sql, [nombre, correo, contraseña], (error, results) => {
    if (error) {
      console.error('Error al registrar usuario:', error);
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
});

// Endpoint para login de usuario
app.post('/login', (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
  }

  const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
  connection.query(sql, [correo, contraseña], (error, results) => {
    if (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ error: 'Error en login' });
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login exitoso', usuario: results[0] });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });
});


// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
