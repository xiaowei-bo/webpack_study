const nodemon = require('nodemon');

nodemon({
    script: 'service/dev_server.js',
    restartable: "rs",
    verbose: true,
    watch: [
        "service/",
        "webpack.common.js",
        "webpack.dev.js"
    ],
    delay: "1000",
    ext: "js njk"
});