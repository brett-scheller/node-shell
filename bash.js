process.stdout.write('prompt > ');

const pwd = require('./pwd');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
