require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./styles/app.css")
import React from 'react';
import ReactDOM from 'react-dom';
import PlanetList from './scripts/components/planetList';

var App =   React.createClass({
	render: function(){
		return (
      		<div>
      			<PlanetList></PlanetList>
  			</div>
		);
	}
});

module.exports = App;

ReactDOM.render(<App/>, document.querySelector("#myApp"));
