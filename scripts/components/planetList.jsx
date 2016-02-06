import React from 'react';
import Reflux from 'reflux';

import PlanetStore from '../stores/planetStore';
import Actions from '../actions/actions';

var PlanetList =   React.createClass({
	mixins: [Reflux.connect(PlanetStore, 'planetstore')],

	handleSelectChange: function(index, event){
		Actions.selectChange(index, event);
	},

	buildOptions: function(planetList, missionObject){
		var options = planetList.map(function(planet, i){
			var destinationPlanet = planet.name == missionObject.selectedPlanet.name ? true : false;

			if(!planet.isSelected || destinationPlanet) {
				return(
					<option value={planet.name} selectedValue={destinationPlanet}>{planet.name}</option>
				)
			}
		})

		return options;
	},

	buildSelectBoxes: function(planetList, missionObjects){
		var self = this;
		var planetGroup = missionObjects.map(function(missionObject, i){
		    return (
				<select id={i}  onChange={self.handleSelectChange.bind(this, i)}>
					<option>select</option>
					{self.buildOptions(planetList, missionObject)}
				</select>
	      	)		 
		});
    	
		return planetGroup;
	},

	render: function() {

		var planetList = this.state.planetstore.planetList;
		var missionObjects = this.state.planetstore.missionObjects;

		if(missionObjects.length > 0){
			return (
				<div className="planet-list-container">
					{this.buildSelectBoxes(planetList, missionObjects)}
				</div>
			)

		} else{
			return (
				<div>Loading...</div>
			)
		}
	}
});

module.exports = PlanetList;