const mongoose = require("mongoose");

const utilisateurSchema = mongoose.Schema({
  uuid: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Utilisateur", utilisateurSchema);
