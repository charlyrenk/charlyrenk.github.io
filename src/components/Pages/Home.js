import React from 'react';
import styled from 'styled-components';

import Hero from '../Partials/Hero'

const Container = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	height: 100%;
	text-align: center;
`;


const home = (props) => (
	<Container>
		<Hero name="Charles Wilfred Renk"/>
	</Container>
)

export default home;