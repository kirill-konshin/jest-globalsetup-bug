const setup = require('./globalSetup');
module.exports = () => {
    console.log('Teardown', setup.getBrowser());
};