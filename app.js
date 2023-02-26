const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const { faker } = require("@faker-js/faker");

//Model
const fakerModel = require("./models/Utilisateur");

//View
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views"));

// app.set("views", path.join(__dirname, "views"));

// app.set("view engine", "ejs");

// app.engine("ejs", require("ejs").__express);

//VOIR VIDEO POIUR DETERMINER
mongoose
  .connect("mongodb://localhost:27017/BACK-END", { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch((error) => console.log("connection error", error));

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
// Initializing our variables with a different random data each time it is run
// var randomName = faker.name.findName(); // Generates a random name
// var randomEmail = faker.internet.email(); // Generates a random email
// var randomProduct = faker.commerce.productName(); // Generates a random product name
// var randomCompany = faker.company.companyName(); // Will give back a random company name
// // var randomCard = faker.helpers.createCard(); // It's output is a random contact card containing many properties

// // Iteration
// // This code runs twenty times
// // It produces each time different data
// for (i = 0; i < 20; i++) {
//   //   console.log(randomName); // Outputs a random name
//   console.log(randomEmail); // Outputs a random email
//   console.log(randomProduct); // Outputs the random product name generated
//   console.log(randomCompany); // Produces a random company name
//   //   console.log(randomCard); // Gives back a random card
//   console.log(faker.date.past()); // Generates a random past date
// }

app.get("/", (req, res) => {
  fakerModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      res.render("home", { data: data });
    } else {
      res.render("home", { data: {} });
    }
  });
});

app.post("/", (req, res, next) => {
  for (let i = 0; i < 100000; i++) {
    var fakee = new fakerModel({
      uuid: faker.database.collation(),
      nom: faker.name.lastName(),
      email: faker.internet.email(),
    });
    fakee.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }
  res.redirect("/");
});

// app.get("/test", (req, res, next) => {
//   //   res.render("index", { title: "home" });

//   const utilisateurs = [
//     {
//       _id: "oeihfzeoi",
//       uuid: "435535-444",
//       nom: "POL",
//       email: "pol@essai.fr",
//     },
//     {
//       _id: "oeihf9887i",
//       uuid: "435535-444",
//       nom: "STE",
//       email: "ste@essai.fr",
//     },
//   ];
//   res.status(200).json(utilisateurs);
// });

var port = process.env.PORT || 3001;

app.listen(port, () => console.log("server running at port " + port));

module.exports = app;
