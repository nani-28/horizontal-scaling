const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.end(`Hola estoy desde ${os.hostname()}!`);
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});