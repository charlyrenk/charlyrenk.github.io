import React from 'react';
import styled from 'styled-components';

import ProjectTitle from '../../Partials/ProjectsPartials/ProjectTitle';
import BootstrapContainer from '../../Partials/Bootstrapped/BootstrapContainer';
import CopyBlock from '../../Partials/CopyBlock';
import ReturnToHome from '../../Partials/ProjectsPartials/ReturnToHome';

import societyOfProadvisoryHero from '../../../assets/images/projects/society-of-proadvisory.png';

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

const sopa = () => (

	<Body>
		<ReturnToHome />
		<Container>	
			<ProjectTitle title="Society of Proadvisory"/>
		</Container>
		<Container>
			<Hero src={societyOfProadvisoryHero} alt="Society of Proadvisory"/>
		</Container>
		{/* <Directions>Select a phase to view</Directions> */}
		<BootstrapContainer>
			<PhaseBlock className="col-12"><Link href="https://society-of-proadvisory.s3.amazonaws.com/about.html" target="_bank">View the Society</Link></PhaseBlock>
		</BootstrapContainer>
		<Container>
			<CopyBlock>	At Periscope, we built an illumanati/ secret-society themed site to promote Intuit's proadvisor program. The site features easter eggs, quizes, amazing designs, and more.
			</CopyBlock>
			<CopyBlock>	The microsite was hosted using WPEngine. The biggest challenge for this project was implenting its complicated designs in a short amount of time. We delegated tasks through SCRUM and Agile methodologies. Our styles were organized and compiled by SASS which helped tremendously during the collaboration process.
			</CopyBlock>
			<CopyBlock>
				HTML5 | CSS3 | SASS | Javascript | Jquery | Wordpress | WPEngine | PHP 
			</CopyBlock>
		</Container>
	</Body>
)

export default sopa;