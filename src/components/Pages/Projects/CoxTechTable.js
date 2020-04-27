import React from 'react';
import styled from 'styled-components';

import ProjectTitle from '../../Partials/ProjectsPartials/ProjectTitle';
import BootstrapContainer from '../../Partials/Bootstrapped/BootstrapContainer';
import CopyBlock from '../../Partials/CopyBlock';
import Directions from '../../Partials/ProjectsPartials/Directions';
import ReturnToHome from '../../Partials/ProjectsPartials/ReturnToHome';

import techTableHero from '../../../assets/images/projects/cox-tech-table.png';

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
			<ProjectTitle title="Cox Tech Table"/>
		</Container>
		<Container>
			<Hero src={techTableHero} alt="Cox Tech Table"/>
		</Container>

		<Container>
			<CopyBlock>At Periscope, we built a web app for Cox that featured a variety of speakers and headphones available in Cox stores. The web page was designed for Elo tablets. These tablets were set up at experiential tables that users would explore while prospecting different audio accessories.
			</CopyBlock>
			<CopyBlock>	We built the web app using React and styled our components using the Styled-Components library. Each unique tech table accessory had it's own collection of assets and s3 hosting page. Since the Tech Table app was used on Elo tablets, we had to host the s3 bucket links using <CopyLink href="https://us.moodmedia.com/">Mood Media</CopyLink>
			</CopyBlock>
			<CopyBlock>
				Tech used: HTML5 | CSS3 | Javascript | React | Styled Components | AWS S3 Buckets | Photoshop | Mood Media
			</CopyBlock>
		</Container>
	</Body>
)

export default techTable;