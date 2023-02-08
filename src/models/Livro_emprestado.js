import mongoose from "mongoose";

const livro_emprestadoSchema = new mongoose.Schema({
  id_livro: { type: mongoose.Schema.Types.ObjectId, ref:'livros', required: true },
  data_emprestimo: { type: Date, required: true },
  data_devolucao: { type: Date, required: true },
  id_cliente: { type: mongoose.Schema.Types.ObjectId,ref: 'clientes', required: true },
});

const livros_emprestados = mongoose.model("livros_emprestados", livro_emprestadoSchema);

export default livros_emprestados;
