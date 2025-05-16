const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

require("dotenv").config();

const swaggerDocument = YAML.load("./swagger/swagger.yaml");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// PostgreSQL Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Example route
// app.get('/api/users', async (req, res) => {
//   const result = await pool.query('SELECT * FROM users');
//   res.json(result.rows);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO contacts (name, phone, email, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phone, email, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
