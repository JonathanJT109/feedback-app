const express = require("express");
const { Pool } = require("pg");
const http = require("http");
const port = process.env.PORT || 3001;

// Configurar la conexión a la base de datos
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Lafayette1974",
  port: 5432,
});

const app = express();

// Middleware para analizar el cuerpo de la solicitud
app.use(express.json());
// GET all users
app.get("/feedback/mentores", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM feedback.mentores");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


const server = http.createServer(app);

//app.use("/", routes);


server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});