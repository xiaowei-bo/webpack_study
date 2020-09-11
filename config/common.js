const fs = require('fs');
function copyFile(src, dist) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}

module.exports = {
    copyFile
}
