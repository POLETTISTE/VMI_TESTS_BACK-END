const express = require("express");
const app = express();

const mysql = require("mysql2");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

//CREATE CONNECTION MYSQL DATABASE
const db = mysql.createConnection({
  host: "localhost",
  port: "3000",
  user: "root",
  password: "root",
  database: "vmitest",
  socketPath: "/tmp/mysql.sock",
});

//CONNECT DATABASE
db.connect((err) => {
  if (err) throw err;
  console.log("mysql connected...");
});

//CONVERT CSV IN ARRAY RESULTS
fs.createReadStream("mockData.csv")
  .pipe(csv({}))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });

console.log("console.log", results);

//INSERT DATA CSV IN ARRAY RESULTS
// Créer une methode /import-csv pour importer le csv dans la table sql
app.get("/import-csv", (req, res) => {
  results.forEach((result) => {
    let sql = `INSERT INTO user set ?`;
    let query = db.query(sql, result, (err, result) => {
      if (err) throw err;
    });
  });

  res
    .status(200)
    .json({ message: "import des données dans la base de données ..." });
});

// Créer un serveur avec express et une methode get /test qui renvoit {”success”: true}
app.get("/test", (req, res) => {
  let sql = "select * from user";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
  });
  res.status(200).json({ success: "true" });
});

//LISTENING SERVER PORT
// Créer un serveur avec express et une methode get /test qui renvoit {”success”: true}
app.listen("3000"), () => console.log("server started");
