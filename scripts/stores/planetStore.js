var Reflux = require('reflux');
var $ = require('jquery');
var Actions = require('../actions/actions');

var PlanetStore = Reflux.createStore({
	listenables: [Actions],
	planetObject: {planetList: []},
	sourceUrl: "https://findfalcone.herokuapp.com/planets",

	init: function(){
		this.loadPlanets();
	},

	getInitialState: function() {
        return this.planetObject;
    },

	loadPlanets: function (searchPool){
		$.ajax({
			url: this.sourceUrl,
			dataType: 'json',
			cache: false,
			success: function(serverData){ console.log(serverData);
				this.planetObject.planetList = serverData;
				this.trigger(this.planetObject);
			}.bind(this),
			error: function(){
				console.error(this.sourceUrl, status);
			}.bind(this)
		})
	}
});

module.exports = PlanetStore;
