import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    descricao: {type: String},
    cor: {type: String}
  },{ versionKey: false }
);

const categorias = mongoose.model("categorias", categoriaSchema);

export default categorias;
