import React from 'react';
import styled from 'styled-components';

import ProjectTitle from '../../Partials/ProjectsPartials/ProjectTitle';
import BootstrapContainer from '../../Partials/Bootstrapped/BootstrapContainer';
import CopyBlock from '../../Partials/CopyBlock';
import Directions from '../../Partials/ProjectsPartials/Directions';
import ReturnToHome from '../../Partials/ProjectsPartials/ReturnToHome';

import deadpoolHero from '../../../assets/images/projects/deadpool.png';

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

const deadpool = () => (

	<Body>
		<ReturnToHome />
		<Container>	
			<ProjectTitle title="Tiny Hands by Trolli"/>
		</Container>
		<Container>
			<Hero src={deadpoolHero} alt="Deadpool Tiny Hands"/>
		</Container>
		<Directions>Select a phase to view</Directions>
		<BootstrapContainer>
			<PhaseBlock className="col-4 col-sm-4"><Link href="https://s3.amazonaws.com/deadpool2/deadpool-phase1.html" target="_bank">Phase 1</Link></PhaseBlock>
			<PhaseBlock className="col-4 col-sm-4"><Link href="https://s3.amazonaws.com/deadpool2/deadpool-phase2.html" target="_bank">Phase 2</Link></PhaseBlock>
			<PhaseBlock className="col-4 col-sm-4"><Link href="https://s3.amazonaws.com/deadpool2/deadpool-phase3.html" target="_bank">Phase 3</Link></PhaseBlock>
		</BootstrapContainer>
		<Container>
			<CopyBlock>At Periscope Ad Agency, I was the primary developer for a Deadpool-2-themed microsite that featured a new gummy candy from Trolli. Stemming from a cooperative ad campaign between Ferrara (Trolli's parent company) and Fox, Trolli designed a Deadpool themed gummy snacks while also promoting the Deadpool 2 Theatrical and Blu-ray releases. 
			</CopyBlock>
			<CopyBlock>	I was in charge of building out three phases of the site, all of which incorporated slightly different designs and assets. I worked with designers and creatives to create a humorous, yet stylized web experience that shined light on both Deadpool and his mouth-watering candies.
			</CopyBlock>
			<CopyBlock>
					(Keep in mind there a few easter eggs hidden on each phase of the site. Maybe the meta data would be a good place to start...)
			</CopyBlock>
			<CopyBlock>
					Tech used: HTML5 | CSS3 | | Javascript | SASS | Jquery | Google Analytics | Sketch | Photoshop
			</CopyBlock>
		</Container>
	</Body>
)

export default deadpool;