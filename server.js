const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('Your bot is alive!');
});

function keepAlive() {
	server.listen(8080, () => {
		console.log('Server is Ready!');
	});
}

module.exports = keepAlive;