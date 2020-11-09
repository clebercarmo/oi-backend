const moongose = require("mongoose");

const EstadoSchema = new moongose.Schema(
    {
        
        sigla:{
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        }
    },
    {
    timestamps: true
    }
);

EstadoSchema.index({sigla: 1}, {unique: true});
EstadoSchema.index({nome: 1}, {unique: true});
module.exports = moongose.model("Estado", EstadoSchema)