const Estado = require("../model/estado")

class EstadoController {

    async all(req, res){
        const data = await Estado.find({})
        return res.json(data)
    }

    
}

module.exports = new EstadoController();