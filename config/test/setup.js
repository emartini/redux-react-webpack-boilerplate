import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.expect = expect;

// Include all .js files under `app`, except main.js, reducers.js, and routes.js
// This is for code coverage:
const context = require
  .context('../../app', true, /^^((?!(main|reducers|routes)).)*\.js$/);

context.keys().map(context);
