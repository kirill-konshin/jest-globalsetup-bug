const doSomethingAsync = () => new Promise(resolve => resolve(Math.random()));
let browser;
const globalSetup = () => doSomethingAsync().then((res) => {
    browser = res;
    console.log('Setup', module.exports.getBrowser());
});
module.exports = globalSetup;
module.exports.getBrowser = () => browser;