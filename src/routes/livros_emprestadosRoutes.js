import express from "express";
import Livro_emprestadoController from "../controllers/livro_emprestadoController.js";

const router = express.Router();

router
    .get("/livros_emprestados", Livro_emprestadoController.listarLivrosEmprestados)
    .get("/livros_emprestados/:id", Livro_emprestadoController.listarLivroEmprestadoPorId)
    .post("/livros_emprestados", Livro_emprestadoController.cadastrarLivroEmprestado)
    .put("/livros_emprestados/:id", Livro_emprestadoController.atualizarLivroEmprestado)
    .delete("/livros_emprestados/:id", Livro_emprestadoController.deletarLivroEmprestado)





export default router;
