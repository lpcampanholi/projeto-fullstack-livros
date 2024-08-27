import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} fornecida não é um valor permitido"
      },
      autopopulate: true
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorias",
      required: [true, "A categoria é obrigatória"],
      autopopulate: true
    },
    favorito: {
      type: Boolean,
      default: false
    },
    estrelas: {
      type: Number,
      default: 3,
      min: [1, "O número de estrelas deve ser entre 1 e 5. Valor forncecido: {VALUE}"],
      max: [5, "O número de estrelas deve ser entre 1 e 5. Valor forncecido: {VALUE}"]
    },
    // nome_capa: {
    //   type: String,
    // },
    // caminho_capa: {
    //   type: String,
    //   default: "capas"
    // },
      paginas: {
        type: Number,
        validate: {
          validator: (valor) => {
            return valor >= 10 && valor <= 5000;
          },
          message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
        }
        // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
        // max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
      }
    }, {versionKey: false}
);

livroSchema.plugin(autopopulate);
const livros = mongoose.model('livros', livroSchema);


export default livros;
