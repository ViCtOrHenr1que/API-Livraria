import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
  id: { type: String },
  funcional: { type: Number, required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
});

const admins = mongoose.model("admins", adminSchema);

export default admins;
