const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
  //Body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  //Conexção com o Banco de dados Mysql
    const sequelize = new Sequelize('test', 'app', 'app', {
      host: "localhost",
      dialect: 'mysql'
    })
// Rotas
    app.get('/cad', function(req, res){
      res.render('formulario')
    })

    app.post('/add', function(req, res){
      res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
    })

app.listen(8081, function(){
  console.log("Servidor Rodando na url http://localhost:8081");
});
