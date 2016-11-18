/**
 * Npm modules
 */
const commander = require('commander');

/**
 * Action related to the serve command
 * @public
 */
let action = (options) => {
    const hasOptions = (options.styleguide || options.pwa || options.api);

    if (options.styleguide || !hasOptions) {
        serve.serveStyleguide();
    }

    if (options.pwa || !hasOptions) {
        serve.servePwa();
    }

    if (options.api || !hasOptions) {
        serve.serveApi()
    }
}

/**
 * Execute all task related to the styleguide
 * @public
 */
let serveStyleguide = () => {
    console.log('1.1 Read shield project configuration');
    console.log('1.2 Install dependencies');
    console.log('1.3 Run task runner to serve of styleguide');
    console.log('---');
}

/**
 * Execute all task related to the pwa
 * @public
 */
let servePwa = () => {
    console.log('2.1 Read shield project configuration');
    console.log('2.2 Install dependencies');
    console.log('2.3 Run task runner to serve of pwa');
    console.log('---');
}

/**
 * Execute all task related to the api
 * @public
 */
let serveApi = () => {
    console.log('3.1 Read shield project configuration');
    console.log('3.2 Install dependencies');
    console.log('3.3 Run task runner to serve of api');
    console.log('---');
}


var serve = {
    action: action,
    serveStyleguide: serveStyleguide,
    servePwa: servePwa,
    serveApi: serveApi
}

module.exports = serve;