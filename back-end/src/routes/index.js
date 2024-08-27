import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import categorias from "./categoriasRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de Node.JS"});
});

app.use(
  express.json(),
  livros,
  autores,
  categorias
);
};

export default routes;
