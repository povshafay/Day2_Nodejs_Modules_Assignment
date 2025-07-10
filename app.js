const math = require('./math');
const fs = require('fs');

const a = 10;
const b = 5;

const results = `
Add: ${math.add(a, b)}
Subtract: ${math.subtract(a, b)}
Multiply: ${math.multiply(a, b)}
Divide: ${math.divide(a, b)}
`;

fs.writeFileSync('log.txt', results);

const content = fs.readFileSync('log.txt', 'utf8');
console.log('Math Operations Output:\n', content);
