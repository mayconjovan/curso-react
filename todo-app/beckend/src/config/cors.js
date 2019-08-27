module.exports = function(req, res, next) {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept')
    next()
}