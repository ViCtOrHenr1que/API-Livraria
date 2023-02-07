import livros from "../models/Livro.js";

class LivroController {


  static listarLivros = (req, res) => {
    livros
      .find(
          (err, livros) => {
            res.status(200).json(livros);
          }); 
      
  };

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id, ( err, livros) => {
        if (err) {
          res.status(400).send({
            message: `${err.message} - ID incorreto, não foi possível encontrar o livro `,
          });
        } else {
          res.status(200).json(livros);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "O livro foi atualizado com sucesso" });
      } else {
        res.status(500).send({
          message: `${err.message} - ID incorreto, não foi possível atualizar o livro `,
        });
      }
    });
  };

  static deletarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Livro removido com sucesso` });
      } else {
        res.status(500).send({
          message: `${err} - Id incorreto, não foi possivel deletar o livro`,
        });
      }
    });
  };

  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;

    livros.find({ editora: editora }, {}, (err, livros) => {
      res.status(200).send(livros); //fazer condicional
    });
  };
}

export default LivroController;
