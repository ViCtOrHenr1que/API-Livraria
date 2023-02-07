import express from "express";
import livros from "./livrosRoutes.js";
import clientes from "./clientesRoutes.js";
import admins from "./adminsRoutes.js";
import livros_emprestados from "./livros_emprestadosRoutes.js";


const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Tela inicial" });
  });

  app.use(express.json(),
         livros,
         clientes,
         admins,
         livros_emprestados

    );
};

export default routes;
