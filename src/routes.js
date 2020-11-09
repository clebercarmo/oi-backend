const express = require("express");
const routes = express.Router()

const CidadeController = require("./app/controller/CidadeController");
const PessoaController = require("./app/controller/PessoaController");
const EstadoController = require("./app/controller/EstadoController");


// CIDADE
routes.get("/cidade", CidadeController.all)
routes.get("/cidade/:id", CidadeController.get)
routes.post("/cidade", CidadeController.novo)
routes.put("/cidade/:id", CidadeController.update)
routes.delete("/cidade/delete/:id", CidadeController.delete)

//PESSOA
routes.get("/pessoa", PessoaController.all)
routes.post("/pessoa", PessoaController.novo)
routes.get("/pessoa/:id", PessoaController.get)
routes.put("/pessoa/:id", PessoaController.update)
routes.delete("/pessoa/delete/:id", PessoaController.delete)

//ESTADO
routes.get("/estados", EstadoController.all)


module.exports =routes;