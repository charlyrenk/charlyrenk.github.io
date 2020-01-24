import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';

// Projects
import Deadpool from './components/Pages/Projects/DeadpoolTinyHands';
import SOPA from './components/Pages/Projects/SocietyOfProadvisory';
import TechTable from './components/Pages/Projects/CoxTechTable';
import BillionDollarCommercial from './components/Pages/Projects/BillionDollarCommercial';




class App extends Component {

	render() {
		const baseUrl = process.env.PUBLIC_URL;
		
		return (
			<Layout>
				<BrowserRouter basename="/">
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
					<Route exact path={baseUrl + "/SocietyOfProadvisory"} render={props =>
						<Fragment>
							<SOPA />
						</Fragment>
					} />
					<Route exact path={baseUrl + "/CoxTechTable"} render={props =>
						<Fragment>
							<TechTable />
						</Fragment>
					} />
					<Route exact path={baseUrl + "/BillionDollarCommercial"} render={props =>
						<Fragment>
							<BillionDollarCommercial />
						</Fragment>
					} />
				</BrowserRouter>
			</Layout>
		);
	}
}

export default App;