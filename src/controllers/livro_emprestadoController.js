import livros_emprestados from "../models/Livro_emprestado.js";

class LivroController {
  static listarLivrosEmprestados = (req, res) => {
    livros_emprestados
      .find()
      .populate("id_livro")
      .populate("id_cliente")
      .exec((err, livros_emprestados) => {
        res.status(200).json(livros_emprestados);
      });
  };

  static listarLivroEmprestadoPorId = (req, res) => {
    const id = req.params.id;

    livros_emprestados.findById(id, (err, livros_emprestados) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - ID incorreto, não foi possível encontrar o livro `,
        });
      } else {
        res.status(200).json(livros_emprestados);
      }
    });
  };

  static cadastrarLivroEmprestado = (req, res) => {
    let livro_emprestado = new livros_emprestados(req.body);

    livro_emprestado.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro.` });
      } else {
        res.status(201).send(livro_emprestado.toJSON());
      }
    });
  };

  static atualizarLivroEmprestado = (req, res) => {
    const id = req.params.id;

    livros_emprestados.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - ID incorreto, não foi possível atualizar o livro `,
        });
      } else {
        res.status(200).send({ message: "O livro foi atualizado com sucesso" });
      }
    });
  };

  static deletarLivroEmprestado = (req, res) => {
    const id = req.params.id;

    livros_emprestados.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err} - Id incorreto, não foi possivel deletar o livro`,
        });
      } else {
        res.status(200).send({ message: `Livro removido com sucesso` });
      }
    });
  };
}

export default LivroController;
