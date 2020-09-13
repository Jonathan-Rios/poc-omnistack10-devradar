const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.i5ohh.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:

// Query params: request.query (Filtros, ordenação, paginação, ... )
// -- Visível na URL "/user?id=1"
// Routes params: request.params (Identificar um recurso na alteração ou remoção )
// -- Mais discreto "/user/:id = /user/1"
// Body : request.body (Dados para criação ou alteração de um registro)
// -- No corpo no formato de um obj

app.use(cors());
app.use(express.json()); // tem que vir antes de routes.
app.use(routes);

server.listen(3333);