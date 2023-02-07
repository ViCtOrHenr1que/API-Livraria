import mongoose from "mongoose";

const livro_emprestadoSchema = new mongoose.Schema({
  id_livro: { type: String, required: true },
  titulo_livro: { type: String, required: true },
  data_emprestimo: { type: Date, required: true },
  data_devolucao: { type: Date, required: true },
  id_cliente: { type: String, required: true },
  nome_cliente: { type: String, required: true },
});

const livros_emprestados = mongoose.model("livros_emprestados", livro_emprestadoSchema);

export default livros_emprestados;
