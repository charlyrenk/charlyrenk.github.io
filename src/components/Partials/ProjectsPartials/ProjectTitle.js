import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`	
	font-size: 60px;
	font-family: 'Alegreya Sans',sans-serif;
	text-align: center;
	margin: 0;
	color: #c8b16a;
	font-weight: bold;
	@media (max-width: 576px) {
		font-size: 36px;
	} 
`;

const sectionTitle = (props) => (
	
	<SectionTitle>{props.title}</SectionTitle>

)

export default sectionTitle;