class Server {
    constructor({ port, controllers, middlewares, express }) {
        this.app = express();
        this.port = port;
        this.controllers = controllers;
        this.middlewares = middlewares;

        this.mountMiddlewares();
        this.mountControllers();
        this.runServer();
    }
    
    mountControllers() {
        this.controllers.forEach(
            (ctrl) => { 
                this.app.use(ctrl.mainRoute, ctrl.getRouter())
            }
        );
    }

    mountMiddlewares() {
        this.middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    
    runServer() {
        this.app.listen(this.port, () => {
            console.log(`Server: Up and running on port ${this.port}`);
        });
    }
}

module.exports = Server;