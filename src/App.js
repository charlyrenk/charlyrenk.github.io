import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';

// Projects
import Deadpool from './components/Pages/Projects/DeadpoolTinyHands'

class App extends Component {

	render() {
		const baseUrl = process.env.PUBLIC_URL;
		
		return (
			<Layout>
				<BrowserRouter>
					<Route exact path={baseUrl + "/"} render={props =>
						<Fragment>
							<Home />
						</Fragment>
					} />
					<Route exact path={baseUrl + "/DeadpoolTinyHands"} render={props =>
						<Fragment>
							<Deadpool />
						</Fragment>
					} />
				</BrowserRouter>
			</Layout>
		);
	}
}

export default App;