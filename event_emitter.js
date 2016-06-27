let EventEmitter = require('events').EventEmitter;

let logger = new EventEmitter();

logger.on('error', (message) => console.log('ERR: ' + message));

logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Eggs Cracked');

logger.on('close', () =>
	console.log('Closing...'));