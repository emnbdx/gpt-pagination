const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();

const db = new sqlite3.Database("server/db.sqlite");

app.use(express.static("client"));

// API endpoint to get items with pagination
app.get("/api/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const itemsPerPage = parseInt(req.query.itemsPerPage) || 3;
  const offset = (page - 1) * itemsPerPage;

  // Get total number of items
  db.get("SELECT COUNT(*) as totalItems FROM items", (err, countRow) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Get paginated items
    db.all(
      "SELECT * FROM items LIMIT ? OFFSET ?",
      [itemsPerPage, offset],
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json({ items: rows, totalItems: countRow.totalItems });
        }
      }
    );
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
