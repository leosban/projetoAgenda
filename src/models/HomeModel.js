const mongoose = require("mongoose");

const HomeScheme = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeScheme);

class Home {

}

module.exports = Home;
