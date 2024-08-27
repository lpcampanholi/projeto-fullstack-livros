import NaoEncontrado from "../erros/NaoEncontrado.js";
import { categorias } from "../models/index.js";

class CategoriaController {

  static async listarCategorias(req, res, next) {
    try {
      const buscaCategorias = categorias.find();
      req.resultado = buscaCategorias;
      next();
    } catch(erro) {
      next(erro);
    };
  };

  static async listarCategoriasPorId(req, res, next) {
    try {
      const id = req.params.id;
      const categoriasResultado = await categorias.findById(id);
      if (categoriasResultado !== null) {
        res.status(200).send(categoriasResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async cadastrarCategoria(req, res, next) {
    const novaCategoria = req.body;
    try {
      await categorias.create(novaCategoria);
      res.status(201).json({message: "Livro criado com sucesso", categoria: novaCategoria});
    } catch(erro) {
      next(erro);
    };
  };

  static async atualizarCategoria(req, res, next) {
    try {
      const id = req.params.id;
      const categoriaResultado = await categorias.findByIdAndUpdate(id, req.body);
      if (categoriaResultado !== null) {
      res.status(200).send("Livro atualizado com sucesso");
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async excluirCategoria(req, res, next) {
    try {
      const id = req.params.id;
      const categoriaResultado = await categorias.findByIdAndDelete(id);
      if (categoriaResultado !== null) {
      res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

};

export default CategoriaController;
