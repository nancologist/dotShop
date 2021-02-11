class Server {
    constructor({ port, controllers, middlewares, express }) {
        this.app = express();
        this.controllers = controllers;
        this.middlewares = middlewares;

        this.mountMiddlewares();
        this.mountControllers();
        this.app.listen(port);
    }

    mountMiddlewares() {
        this.middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    mountControllers() {
        this.controllers.forEach((ctrl) => { this.app.use(ctrl.xxx, ctrl) });
    }
}

module.exports = Server;