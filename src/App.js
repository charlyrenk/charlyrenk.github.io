import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';

// Projects
import Deadpool from './components/Pages/Projects/DeadpoolTinyHands';
import SOPA from './components/Pages/Projects/SocietyOfProadvisory';
import TechTable from './components/Pages/Projects/CoxTechTable';
import BillionDollarCommercial from './components/Pages/Projects/BillionDollarCommercial';




class App extends Component {

	render() {
		// const baseUrl = process.env.PUBLIC_URL;
		
		return (
			<Layout>
				<HashRouter basename="/">
					<Route exact path="/" component={Home} />
					<Route path={"/DeadpoolTinyHands"} component={Deadpool}/>
					<Route path={"/SocietyOfProadvisory"} component={SOPA}/>
					<Route path={"/CoxTechTable"} component={TechTable}/>
					<Route path={"/BillionDollarCommercial"} component={BillionDollarCommercial}/>
				</HashRouter>
			</Layout>
		);
	}
}

export default App;