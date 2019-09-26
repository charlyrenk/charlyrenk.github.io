import React from 'react';
import styled from 'styled-components';

const Copy = styled.p`	
	font-size: 20px;
	font-family: 'Alegreya Sans',sans-serif;
	margin: 5px 0;
	color: #FFFFFF;
	@media (max-width: 576px) {
		font-size: 18px;
	} 
`;

const copyblock = (props) => (
	<Copy>{props.children}</Copy>	
)

export default copyblock;