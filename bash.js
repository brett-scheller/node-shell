process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  const input2 = input.split(' ');
  const cmd = input2[0];
  const args = input2.slice(1);
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(args[0]);
  }
  process.stdout.write('You typed: ' + input + '\n');
  setTimeout(function() {
    process.stdout.write('prompt > ');
  }, 200);
});
