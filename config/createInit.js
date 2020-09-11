const path = require('path');
const { copyFile } = require("./common");
copyFile(`${__dirname}/config/common.js`, `${__dirname}/src`);
console.log(__dirname)
