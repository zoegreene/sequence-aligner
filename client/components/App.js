import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/history" component={ History } />
				<Route path="/" component={ Home } />
			</Switch>
		</Router>
	)
}

export default App;

