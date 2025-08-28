var express = require('express');
var router = express.Router();

/*llama al diseño. */
router.get('/', function (req, res, next) {
    res.render('admin/novedades', { 
        layout: 'admin/layout', 
        usuario: req.session.nombre,
    });
});

module.exports = router;


