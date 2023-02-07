import admins from "../models/Admin.js";

class AdminControler {
  static listarAdmins(req, res) {
    admins.find((err, admins) => {
      res.status(200).json(admins);
    });
  }


  static listarAdminPorId(req, res) {
    const id = req.params.id;

    admins.findById(id, (err, admins) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - ID incorreto, não foi possível encontrar o admin `,
        });
      } else {
        res.status(200).json(admins);
      }
    });
  }

  static cadastrarAdmin(req, res) {
    let admin = new admins(req.body);

    admin.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - falha ao cadastrar admin, cheque as informações de cadastro e tente novamente !.`,
        });
      } else {
        res.status(201).send(admin.toJSON());
      }
    });
  }

  static atualizarAdimin(req, res) {
    const id = req.params.id;

    admins.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res
          .status(200)
          .send({ message: "O cliente foi atualizado com sucesso" });
      } else {
        res.status(500).send({
          message: `${err.message} - ID incorreto, não foi possível atualizar o admin `,
        });
      }
    });
  }

  static deletarAdmin(req, res) {
    const id = req.params.id;

    admins.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Admin removido com sucesso` });
      } else {
        res.status(500).send({
          message: `${err} - Id incorreto, não foi possivel deletar o admin`,
        });
      }
    });
  }
}

export default AdminControler;
