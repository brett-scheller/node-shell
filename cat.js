const fs = require('fs');
const filePath = require('./pwd');

module.exports = function () {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data)
  })
}
