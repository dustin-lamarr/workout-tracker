const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async(req,res) => {
    try {
        res.render('index.html');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/exercise', async(req,res) => {
    console.log("made it to exercise GET")
    try {
        res.render('exercise.html');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stats', async(req,res) => {
    try {
        res.render('stats.html');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;