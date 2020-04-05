const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('Welcome to weather api');
});

module.exports = router;