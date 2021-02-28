module.exports.allowCORS = (url) => {
    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', url);
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    }
}