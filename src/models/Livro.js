import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true},
  ano_lancamento: { type: Date },
  genero: { type: String, required: true },
  disponivel: {type: Boolean, required: true}
});

const livros = mongoose.model('livros', livroSchema);

export default livros;