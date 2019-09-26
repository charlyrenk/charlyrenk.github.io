import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	color: #FFFFFF;
	font-weight: bold;
	font-size: 26px;
	position: fixed;
	top: 5px;
	left: 0;
	padding: 0 30px
	z-index: 10000;
	text-decoration: none;
	:hover {
		color: #c8b16a;	
		text-decoration: none;
	}
	@media (max-width: 576px) {
		font-size: 20px;
		padding: 10px 30px

	} 
`

const returnLink = (props) => (
	
	<Link href="/">&#x2190;</Link>

)

export default returnLink;