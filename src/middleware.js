const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  fs.readFile(path.join(__dirname, req.path), 'utf-8', (err, data) => {
    if (err) {
      next();
    } else {
      res.write(data);
      res.end();
    }
  });
};
