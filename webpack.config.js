// Iremos importar o modulo 'path' para trabalhar com caminhos;
const path = require("path"); // CommonJS - Módulo padrão do Node

// Iremos exportar algo, funcionando como se fosse um objeto, dentro dele será a configuração do webpack
module.exports = {
  // Modo com o qual estamos trabalhando
  mode: "production",
  // Definiremos qual o caminho da entrada do nosso arquivo fonte
  entry: "./frontend/main.js",
  // Definiremos qual o caminho de saida do nosso arquivo fonte com o metodo .resolve()
  // Dentro do objeto output
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    // Definimos o nome do arquivo que irá ser gerado na nossa app
    filename: "bundle.js",
  },
  // Configuramos para que o webpack use babel
  module: {
    // Definimos as regras dentro de um array com objetos
    // Pois cada regra tem seu loader especifico, juntamente com as extensões e etc
    rules: [
      {
        // Excluiremos a pasta do node com uma expressão regular, pois é uma pasta 'pesada'
        exclude: /node_modules/,
        // Testamos qual o arquivo será lido e analisado, para formar o bundle
        // Usaremos expressão regular para configurar
        test: /\.js$/,
        // Iremos definir qual loader ele irá usar
        use: {
          loader: "babel-loader",
          // Configuramos quais opções o loader irá usar
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  // Faz o mapeamento da nossa fonte
  devtool: "source-map",
};
