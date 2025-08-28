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

module.exports = { getNovedades,insertNovedad }