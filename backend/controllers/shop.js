const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json({
        msg: 'Hallo Helmut!!!'
    });
})

module.exports = router;