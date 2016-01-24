import React from 'react';
import Reflux from 'reflux';

import PlanetStore from '../stores/planetStore';
import Actions from '../actions/actions';

var PlanetList =   React.createClass({
	mixins: [Reflux.connect(PlanetStore, 'planetstore')],

	render: function() {
		
		var planetList = this.state.planetstore.planetList;

		if(planetList.length > 0){
			this.options = planetList.map(function(planet, i){
				return (
					<option>{planet.name}</option>
		      	)
		    });
			return (
				<select>
					{this.options}
				</select>
			)

		} else{
			return (
				<div>no data</div>
			)
		}
	}
});

module.exports = PlanetList;