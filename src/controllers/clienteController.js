import clientes from "../models/Cliente.js";

class ClienteControler {

    static listarClientes (req, res) {
         clientes.find((err, clientes) => {
           res.status(200).json(clientes);
         }); 
    }

    static listarClientePorId (req, res){
        const id  = req.params.id

        clientes.findById(id, (err, clientes) => {
            if (err) {
              res.status(400).send({
                message: `${err.message} - ID incorreto, não foi possível encontrar o cliente `,
              });
            } else {
              res.status(200).json(clientes);
            }
        })
    }

    static cadastrarCliente (req, res){
        let cliente = new clientes(req.body);

        cliente.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar cliente, cheque as informações de cadastro e tente novamente !.` });
      } else {
        res.status(201).send(cliente.toJSON());
      }
    });
}

    static atualizarCliente (req, res){
        const id = req.params.id;

        clientes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
           if (!err) {
             res
               .status(200)
               .send({ message: "O cliente foi atualizado com sucesso" });
           } else {
             res.status(500).send({
               message: `${err.message} - ID incorreto, não foi possível atualizar o cliente `,
             });
           } 
        })
    }

    static deletarCliente (req, res){
        const id = req.params.id;

        clientes.findByIdAndDelete(id, (err) => {
            if (!err) {
              res.status(200).send({ message: `Cliente removido com sucesso` });
            } else {
              res.status(500).send({
                message: `${err} - Id incorreto, não foi possivel deletar o cliente`,
              });
            }
        } )
    }
}

export default ClienteControler;