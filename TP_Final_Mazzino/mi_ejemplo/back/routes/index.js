var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacto', (req, res, next) => {
    res.render('contacto', {
        layout: 'layout'
    });
});

router.get('/nosotros', (req, res, next) => {
    res.render('nosotros', {
        layout: 'layout'
    });
});

router.get('/novedades', (req, res, next) => {
    res.render('novedades', {
        layout: 'layout'
    });
});

router.get('/servicios', (req, res, next) => {
    res.render('servicios', {
        layout: 'layout'
    });
});

module.exports = router;
