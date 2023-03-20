const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.sqlite");

// Créer la table items s'il n'existe pas
db.run(
  "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, label TEXT, quantity INTEGER)"
);

// Insérer des données d'exemple
const items = [
  { label: "nice", quantity: 8 },
  { label: "cool", quantity: 15 },
  { label: "awesome", quantity: 20 },
  { label: "fantastic", quantity: 6 },
  { label: "amazing", quantity: 12 },
  { label: "wonderful", quantity: 4 },
  { label: "impressive", quantity: 9 },
  { label: "great", quantity: 10 },
  { label: "super", quantity: 3 },
  { label: "brilliant", quantity: 14 },
];

const insertItem = db.prepare("INSERT INTO items (label, quantity) VALUES (?, ?)");

items.forEach((item) => {
  insertItem.run(item.label, item.quantity);
});

insertItem.finalize((err) => {
  if (err) {
    console.error("Erreur lors de l''insertion des données d'exemple :", err);
} else {
    console.log("Données d'exemple insérées avec succès !");
}
});

// Fermer la connexion à la base de données
db.close((err) => {
if (err) {
    console.error(err.message);
}
console.log("Fermeture de la connexion à la base de données.");
});
