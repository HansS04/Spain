const path = require('path');
const http = require('http');
const express = require('express');
const fs = require('fs').promises;

//spustime asychroní funkci, která počká, až se načtou soubory
async function readJSON(path) {
    const data = await fs.readFile(path)
    .catch(err => console.error('Chyba načtení souboru: ', err));
    return JSON.parse(data.toString());
}

const app = express();
const server = http.createServer(app)

// Nastavení statické složky
app.use(express.static(path.join(__dirname, 'public')));
//Server přečte a načte soubory json, pokud najde error, vypíše ho
app.get('/api/events', (req, res) => {
    readJSON('data/events.json')
    .then(data => res.send(data))
    .catch(err => res.send('Chyba lávky', err));
});
//Musím zjisti, jak funguje Opsáno z hodiny
app.get('/api/events/:index', (req, res) => {
    readJSON('data/events.json')
    .then(data => res.send(data[req.params.index]))
    .catch(err => res.send('Chyba lávky', err));
});

//Server přečte a načte soubory json, pokud najde error, vypíše ho
app.get('/api/events', (req, res) => {
    readJSON('data/heroes.json')
    .then(data => res.send(data))
    .catch(err => res.send('Chyba lávky', err));
});
//Musím zjisti, jak funguje Opsáno z hodiny
app.get('/api/historie/:index', (req, res) => {
    readJSON('data/historie.json')
    .then(data => res.send(data[req.params.index]))
    .catch(err => res.send('Chyba lávky', err));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server bezi na portu: ${PORT}`));