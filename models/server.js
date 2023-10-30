const express = require('express');
const cors = require('cors');
const app = express();

class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.userPath = '/api/user';

        //middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {

        //cors
        this.app.use(cors());
        
        //read and parse body to json
        this.app.use(express.json());
        
        //public directory
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.userPath, require('../routes/user'));

    }

    listen() {
        this.app.listen(process.env.PORT, () => { console.log(`Server running on port ${this.PORT}`) })
    }
}

module.exports = Server;