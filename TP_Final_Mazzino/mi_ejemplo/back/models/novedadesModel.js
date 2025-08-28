var pool = require('./bd');

async function getNovedades() {
    var query = "select * from novedades order by 1 asc";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (erroг) {
        console.log(error);
        throw erroг;
    }

}

async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById }
