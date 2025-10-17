// importiamo i dati della risorsa
const postIndex = require('../data/index');

function index(req, res) {
     res.send("Lista Posts")
};


function show(req, res) {
    res.send("dettagli Post: " + req.params.id)
}

function store(req, res) {
    res.send("Creazione nuovo post")
}

function update(req, res) {
    res.send("Modifica integrale del post: " + req.params.id)
}

function modify(req, res) {
    res.send("Modifica parziale del post: " + req.params.id)
}

function destroy(req, res) {
    res.send("Eliminazione del post: " + req.params.id)
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }