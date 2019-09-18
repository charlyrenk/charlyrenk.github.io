import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: left;
	position: relative;
	padding: 60px 30px;
	
	@media (max-width: 576px) {
		padding: 30px;
	}
`;

const Copy = styled.p`	
	font-size: 24px;
	font-family: 'Alegreya Sans',sans-serif;

	@media (max-width: 576px) {
		font-size: 20px;
	} 
`;

const copyblock = (props) => (
	<Container>
		<Copy>{props.children}</Copy>	
	</Container>
)

export default copyblock;