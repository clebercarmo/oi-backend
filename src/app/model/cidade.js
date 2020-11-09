const moongose = require("mongoose");

const CidadeSchema = new moongose.Schema(
    {
        
        uf:{
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        }
    },
    {
    timestamps: true
    }
);

CidadeSchema.index({uf: 1, cidade: 1}, {unique: true});
module.exports = moongose.model("Cidade", CidadeSchema)