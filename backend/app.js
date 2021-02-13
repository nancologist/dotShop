const bodyParser = require('body-parser');

const Server = require('./Server/server');
const ShopController = require('./controllers/shop');
const AdminController = require('./controllers/admin');
const { allowCORS } = require('./middlewares');

new Server({
    port: 8989,
    controllers: [
        new AdminController('/admin'),
        new ShopController('/shop'),
    ],
    middlewares: [
        bodyParser.json(),
        allowCORS
    ]
});
