const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

app.get("/test", (req, res, next) => {
  const table = [];

  for (let i = 0; i < 100; i++) {
    table.push({
      uuid: faker.datatype.array(2),
      nom: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }

  res.status(200).json(table);
  res.status(200).json({ success: true });
});

module.exports = app;
