import React from 'react';
import styled from 'styled-components';

import charlyImg from '../../assets/images/charlyrenk-tuba.png';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: right;
	position: relative;
`;

const Rectangle = styled.div`
	display: inline-block;
    height: 60px;
    width: 90%;
    background: #3e7bb4;
    position: absolute;
    right: 190px;
	top: 60px;

	@media (max-width: 576px) {
		height: 25px;
		width: 100%;
		position: absolute;
		right: 40px;
		top: 25px;
	}

`;

const Image = styled.img`
	position:absolute;
	right: -150px;
	@media (max-width: 576px) { 
		width: 200px;
		right: -75px;
	 }
`;

const Name = styled.h1`
	 font-size: 45px;
	 font-family: 'Alegreya Sans', sans-serif;
	 top: 110px;
	 left: 30px;
	 position: absolute;

	@media (max-width: 576px) { 
		font-size: 27px;
		top: 42px;
		left: 20px;
	 }
`;



const hero = (props) => (
	<Container>
		<Rectangle />
		<Image src={charlyImg} alt="Charly Renk" />
		<Name>{props.name}</Name>
	</Container>
)

export default hero;