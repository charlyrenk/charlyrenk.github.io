import React from 'react';
import styled from 'styled-components';

const Directions = styled.p`
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	font-family: 'Alegreya Sans',sans-serif;
	color: #6ba8e1;
	@media (max-width: 576px) {
		font-size: 30px;
		margin: 0px;
	} 
`

const directions = (props) => (

	<Directions>{props.children}</Directions>

)

export default directions;