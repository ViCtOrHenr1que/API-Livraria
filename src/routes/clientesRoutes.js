import express from "express";
import ClienteControler from "../controllers/clienteController.js";

const router = express.Router();

router
    .get("/clientes", ClienteControler.listarClientes)
    .get("/clientes/:id", ClienteControler.listarClientePorId)
    .post("/clientes", ClienteControler.cadastrarCliente)
    .put("/clientes/:id", ClienteControler.atualizarCliente)
    .delete("/clientes/:id", ClienteControler.deletarCliente)





export default router;
