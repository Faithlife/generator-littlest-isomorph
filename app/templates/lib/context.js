module.exports = require('littlest-isomorph').createContext();

// Since we perform Actions and get Stores by name, we need to bootstrap them
// somewhere. How about here? There's no magic going on here, we're just
// using `require` to ensure some JavaScript gets run, populating our Context.
require('../lib/actions/org');
require('../lib/actions/user');
require('../lib/stores/org');
require('../lib/stores/user');
