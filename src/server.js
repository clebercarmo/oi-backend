const express = require("express");
const db = require("./database/config")
const mongoose = require("mongoose");

class Backend {

    constructor(){
        this.express = express();
        //this.database();
        this.middlewares();
        this.routes();

        this.express.listen(4000, () => console.log("funcionando na porta 4000"))

    }

    database(){

        mongoose.connect(db.uri, { useNewUrlParser: true})
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require("./routes"));
    }


}

module.exports = new Backend().express;
