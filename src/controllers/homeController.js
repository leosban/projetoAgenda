const Contato = require('../models/ContatoModel');

// Função que está renderizando o html na página
exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  // Podemos injetar dados como segundo parâmetro, e podemos colocar o que quisermos
  res.render("index", { contatos });
  return;
};

