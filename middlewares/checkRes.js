function checkRes(req, res, next){
    console.log("ciao sono il middleware")

    next()
}

module.exports = checkRes