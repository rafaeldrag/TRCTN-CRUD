const app = require('./app');

const server = app.listen(3000, () => {
    console.log("Rodando na porta " + server.address().port);
})
