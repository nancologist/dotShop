const bodyParser = require('body-parser');
const helmet = require('helmet');

const Server = require('./Server/server');
const ShopController = require('./controllers/shop');
const AdminController = require('./controllers/admin');
const { allowCORS } = require('./middlewares');

const PORT = process.env.PORT || 8989;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000'

new Server({
    port: PORT,
    controllers: [
        new AdminController('/admin'),
        new ShopController('/shop'),
    ],
    middlewares: [
        bodyParser.json(),
        allowCORS(CLIENT_URL),
        helmet()
    ]
});
