const moongose = require("mongoose");

const PessoaSchema = new moongose.Schema(
    {
       
        ativo: {
            type: Boolean,
            default: true
        },
        tipo:{
            type: String,
            required: true
        },
        nome:{
            type: String,
            required: true
        },
        cpf_cnpj: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        uf: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        dt_nascimento: {
            type: Date,
            required: true
        },
        ddd: {
            type: Number,
            required: true
        },
        numtelefone: {
            type: Number,
            required: true
        }

    },
    {
    timestamps: true
    }
);

PessoaSchema.index({ddd: 1, numtelefone: 1}, {unique: true});

module.exports = moongose.model("Pessoa", PessoaSchema)