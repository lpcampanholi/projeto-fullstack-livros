import express from "express";
import CategoriaController from "../controllers/categoriaController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/categorias", CategoriaController.listarCategorias, paginar)
  .get("/categorias/:id", CategoriaController.listarCategoriasPorId)
  .post("/categorias", CategoriaController.cadastrarCategoria)
  .put("/categorias/:id", CategoriaController.atualizarCategoria)
  .delete("/categorias/:id", CategoriaController.excluirCategoria);

export default router;
