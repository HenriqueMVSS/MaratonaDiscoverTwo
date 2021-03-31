const express = require('express');
const routes = express.Router();



routes.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html"); //caminho absoluto, para enviar arquivo
});

routes.get('/index.html', (req, res) => {
    return res.redirect("/"); //redireciona para a /
});

routes.get('/job-edit.html', (req, res) => {
    return res.sendFile(__dirname + "/views/job-edit.html"); //caminho absoluto, para enviar arquivo
});

routes.get('/job.html', (req, res) => {
    return res.sendFile(__dirname + "/views/job.html"); //caminho absoluto, para enviar arquivo
});

routes.get('/profile.html', (req, res) => {
    return res.sendFile(__dirname + "/views/profile.html"); //caminho absoluto, para enviar arquivo
});


module.exports = routes;