const router = require('express').Router();

const testIt = (req, res, next) => {
    res.json({
        msg: 'Hallo Helmut!!!'
    });
}

router.get('/', testIt)

module.exports = router;