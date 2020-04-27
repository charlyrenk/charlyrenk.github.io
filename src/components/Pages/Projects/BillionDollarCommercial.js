import React from 'react';
import styled from 'styled-components';

import ProjectTitle from '../../Partials/ProjectsPartials/ProjectTitle';
import BootstrapContainer from '../../Partials/Bootstrapped/BootstrapContainer';
import CopyBlock from '../../Partials/CopyBlock';
import Directions from '../../Partials/ProjectsPartials/Directions';
import ReturnToHome from '../../Partials/ProjectsPartials/ReturnToHome';

import techTableHero from '../../../assets/images/projects/billion-dollar-commercial.png';

const Body = styled.div`
	background: #2a2a2a;
	overflow: hidden;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: left;
	position: relative;
	padding: 30px;
	@media (max-width: 576px) {
		padding: 20px
	} 
`;


const Hero = styled.img`
	width: 100%;
`

const PhaseBlock = styled.div`
	text-align: center;
`

const Link = styled.a`
	color: #FFFFFF;
	font-weight: bold;
	font-size: 26px;
	text-decoration: none;
	:hover {
		color: #c8b16a;
	}
	@media (max-width: 576px) {
		font-size: 18px;
	} 
`

const CopyLink = styled.a`
	font-size: 20px;
	font-family: 'Alegreya Sans',sans-serif;
	margin: 5px 0;
	color: #FFFFFF;
	@media (max-width: 576px) {
		font-size: 18px;
	} 
`

const techTable = () => (

	<Body>
		<ReturnToHome />
		<Container>	
			<ProjectTitle title="Billion Dollar Commercial"/>
		</Container>
		<Container>
			<Hero src={techTableHero} alt="Billion Dollar Commercial"/>
		</Container>
		<Directions>Select a Phase to View</Directions>
		<BootstrapContainer>
			<PhaseBlock className="col-6"><Link href="https://billion-dollar-commercial.s3.amazonaws.com/countdown.html" target="_bank">Phase One: Countdown</Link></PhaseBlock>
			<PhaseBlock className="col-6"><Link href="https://billion-dollar-commercial.s3.amazonaws.com/videos-page.html" target="_bank">Phase Two: Commerical Reveal</Link></PhaseBlock>
		</BootstrapContainer>
		<Container>
			<CopyBlock>	At Periscope, I built a microsite promoting Minnesota Lottery's Billion Dollar Commerical campaign.
				The site was built into two phases: the first a countdown page, the second being the big reveal. 
			</CopyBlock>
			<CopyBlock>	The microsite was hosted using WPEngine and had built-in script that switched the first phase to the second phase after the countdown reached zero. The site features many Vimeo embeds and required significant style changes for mobile screen sizes. 
			</CopyBlock>
			<CopyBlock>
					Tech used: HTML5 | CSS3 | SASS | Javascript | Jquery | Wordpress | WPEngine | PHP 
			</CopyBlock>
		</Container>
	</Body>
)

export default techTable;