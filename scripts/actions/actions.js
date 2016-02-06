var Reflux = require('reflux');

var ActionCollections = Reflux.createActions([
	'loadPlanets',
	'selectChange'
]);

module.exports = ActionCollections;