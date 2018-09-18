const fs = require('fs');

module.exports = function (filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log('\n' + data.toString());

  })
}
