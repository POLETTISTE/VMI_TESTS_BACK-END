const express = require("express");

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

app.get("/api/table", (req, res, next) => {
  const table = [
    // {
    //   _id: "oeihfzeoi",
    //   nom: "POL",
    //   email: "polettiweb@gmail.com",
    // },
  ];

  let fakeData = {
    _id: "oeihfzeoi",
    nom: "POL",
    email: "polettiweb@gmail.com",
  };

  for (let i = 0; i < 3; i++) {
    // const me = Object.create(person);

    table.push(fakeData);
  }

  //   const table = [
  //     {
  //       _id: "oeihfzeoi",
  //       uuid: "112eXX-345XXX",
  //       nom: "POL",
  //       email: "polettiweb@gmail.com",
  //     },
  //   ];
  res.status(200).json(table);
  res.status(200).json({ success: true });
});

module.exports = app;
