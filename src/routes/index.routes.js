const { Router } = require('express');
const router = Router();

// Initial route
router.get('/', (req, res) => {
    res.send({ message: 'Welcome to weather api' });
});

module.exports = router;