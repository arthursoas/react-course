module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PACH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept')    
    next()
}