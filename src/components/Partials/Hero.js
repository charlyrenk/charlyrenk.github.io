import React from 'react';
import styled from 'styled-components';

import charlyImg from '../../assets/images/charlyrenk-tuba.png';
import linkedInIcon from '../../assets/images/linkedin.png';
import resume from '../../assets/charles_renk_resume.pdf';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: right;
	position: relative;
	height: 435px;
	overflow: hidden;
	margin-bottom: 30px;
	color: #FFFFFF;

	@media (max-width: 576px) {
		height: 175px;
		margin-bottom: 0px;
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
	 font-size: 90px;
	 font-family: 'Alegreya Sans', sans-serif;
	 margin: 0;

	@media (max-width: 992px) { 
		font-size: 60px;
	}

	@media (max-width: 576px) {
		font-size: 30px;
	} 
`;

const Title = styled.p`
	font-size: 50px;
	line-height: 50px;
	font-family: 'Alegreya Sans',sans-serif;
	text-align: left;
	width: 435px;
	margin: 0 0 10px 0;

	@media (max-width: 992px) { 
		font-size: 35px;
		line-height: 35px;	
		width: 350px;
	}

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
	 width: 30px;
	 margin-top: -5px;
	 @media (max-width: 576px) {
		width: 20px;
		margin-top: -2px;
	 } 
`

const ResumeLink = styled.a`
	 font-size: 25px;
	 line-height: 25px;
	 text-decoration: underline;
	 font-family: 'Alegreya Sans',sans-serif;
	 color: #FFFFFF;
	 cursor: pointer;
	 @media (max-width: 576px) {
		font-size: 18px;
		line-height: 18px;
	 } 

`

const hero = (props) => (
	<Container>
		<Rectangle />
		<Image src={charlyImg} alt="Charly Renk" />
		<CopyBlock>
			<Name>{props.name}</Name>
			<Title>{props.title}</Title>
			<ResumeLink href={resume}>Resume</ResumeLink>
			<LinkedIn target="_blank" href="https://www.linkedin.com/in/charles-renk-b90b3a69/">
				<LinkedInIcon src={linkedInIcon} alt="LinkedIn"/>
			</LinkedIn>
		</CopyBlock>
	</Container>
)

export default hero;