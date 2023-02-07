import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
});

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;
