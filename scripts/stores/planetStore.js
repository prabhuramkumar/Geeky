var Reflux = require('reflux');
var $ = require('jquery');
var Actions = require('../actions/actions');

var PlanetStore = Reflux.createStore({
	listenables: [Actions],
	planetObject: {planetList: [], missionObjects: []},
	sourceUrl: "https://findfalcone.herokuapp.com/planets",

	init: function(){
		this.loadPlanets();
	},

	getInitialState: function() {
        return this.planetObject;
    },

    buildPlanets: function(planetList) {    
    	return(
	    	planetList.forEach(function(planet) {
				planet.isSelected = false;
	    	})
    	)
    },

    buildMission: function(planetList){
		for(var i=0; i<4; i++){
			this.planetObject.missionObjects.push({
				id: i,
				selectedPlanet: {}
			})
		}
	},

    selectChange: function(selectedMission, event){

    	var self = this,
		selectedPlanet = event.target.value,
		planetList = this.planetObject.planetList,
		selectedMissionObject = this.planetObject.missionObjects[selectedMission];

		planetList.forEach(function(planet){

			if(selectedMissionObject.selectedPlanet.name == planet.name){
				planet.isSelected = false;
			}
			if(planet.name == selectedPlanet) {
				planet.isSelected = true;
				selectedMissionObject.selectedPlanet = planet;			
			}		
		});
		this.trigger(this.planetObject);
	},


	loadPlanets: function (searchPool){
		$.ajax({
			url: this.sourceUrl,
			dataType: 'json',
			cache: false,
			success: function(serverData){ 
				this.planetObject.planetList = serverData;
				this.buildPlanets(serverData);
				this.buildMission(serverData);
				this.trigger(this.planetObject);
			}.bind(this),
			error: function(){
				console.error(this.sourceUrl, status);
			}.bind(this)
		})
	}
});

module.exports = PlanetStore;
