import React from 'react';
import styled from 'styled-components';

import charlyImg from '../../assets/images/charlyrenk-tuba.png';
import linkedInIcon from '../../assets/images/linkedin.png';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: right;
	position: relative;
	height: 435px;
	overflow: hidden;

	@media (max-width: 576px) {
		height: 175px;
	}
`;

const CopyBlock = styled.div`
	position: absolute;
    bottom: 0;
	text-align: left;
	padding: 0 30px;
	@media (max-width: 576px) {
		padding: 0 20px;
	}
`

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
	overflow: hidden;
	@media (max-width: 576px) { 
		width: 200px;
		right: -75px;
	 }
`;

const Name = styled.h1`
	 font-size: 45px;
	 font-family: 'Alegreya Sans', sans-serif;

	@media (max-width: 576px) { 
		font-size: 27px;
	 }
`;

const Title = styled.p`
	font-size: 35px;
	line-height: 35px;
	font-family: 'Alegreya Sans',sans-serif;
	text-align: left;
	width: 300px;

	@media (max-width: 576px) { 
		font-size: 20px;
		line-height: 20px;
		width: 200px;
		margin: 0;
	 }
`;


const LinkedIn = styled.a`
	 margin-left: 15px;
`

const LinkedInIcon = styled.img`
	 width: 20px;
`

const ResumeLink = styled.a`
	 font-size: 25px;
	 text-decoration: underline;
	 font-family: 'Alegreya Sans',sans-serif;
	 color: #000000;
	 cursor: pointer;

	 @media (max-width: 576px) {
		font-size: 20px;
	 } 

`

const hero = (props) => (
	<Container>
		<Rectangle />
		<Image src={charlyImg} alt="Charly Renk" />
		<CopyBlock>
			<Name>{props.name}</Name>
			<Title>{props.title}</Title>
			<ResumeLink href="charlesrenkresume.pdf">Resume</ResumeLink>
			<LinkedIn target="_blank" href="https://www.linkedin.com/in/charles-renk-b90b3a69/">
				<LinkedInIcon src={linkedInIcon} alt="LinkedIn"/>
			</LinkedIn>
		</CopyBlock>
	</Container>
)

export default hero;