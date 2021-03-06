
console.log('compiling')

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// read in the solidity source code
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source,1).contracts[':Inbox'];


