const Pessoa = require("../model/pessoa")

class PessoaController {

    async novo(req, res){
            const data = await Pessoa.create(req.body)
            return res.json(data)
    }

    async all(req, res){
        const data = await Pessoa.find({})
        return res.json(data)
    }


    async get(req, res){
        const data = await Pessoa.findById(req.params.id).exec();
        return res.json(data)
    }

    async update(req, res){
        const data = await Pessoa.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.json(data)
    }

    async delete(req, res){
        const data = await Pessoa.findByIdAndDelete(req.params.id)
        return res.json(data) 

    }
}

module.exports = new PessoaController();