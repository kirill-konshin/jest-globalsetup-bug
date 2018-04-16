const setup = require('./globalSetup');
describe('browser test', () => {
  it('opens a page', async () => {
      console.log('Test', setup.getBrowser());
  });
});