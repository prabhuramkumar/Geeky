require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import PlanetList from './scripts/components/planetList';

export class App extends React.Component {
	render() {
		return (
      		<div>
      			<PlanetList></PlanetList>
  			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
