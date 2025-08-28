var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel')

/*llama al diseño. */
router.get('/', function (req, res, next) {
    res.render('admin/login', { layout: 'admin/layout' });
});

module.exports = router;

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
        console.log("Muestro data antes");
        console.log(data);

        if (data != undefined) {
            console.log("Muestro data despues");
            console.log(data.id);
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });

        }

    } catch (err) {
        console.log(err);
    }

}) 
