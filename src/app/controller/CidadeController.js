const Cidade = require("../model/cidade")

class CidadeController {

    async novo(req, res){

        const data = await Cidade.create(req.body)
        return res.json(data)
    }

    async all(req, res){
        const data = await Cidade.find({})
        return res.json(data)
    }

    async get(req, res){
        const data = await Cidade.findById(req.params.id).exec();
        return res.json(data)
    }

    async update(req, res){
        const data = await Cidade.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.json(data)
    }

    async delete(req, res){
        const data = await Cidade.findByIdAndDelete(req.params.id)
        return res.json(data) 

    }
}

module.exports = new CidadeController();