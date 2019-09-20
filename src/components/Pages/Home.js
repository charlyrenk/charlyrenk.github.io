import React from 'react';
import styled from 'styled-components';

import Hero from '../Partials/Hero';
import Container from '../Partials/Container';
import CopyBlock from '../Partials/CopyBlock';
import StickyNav from '../Partials/StickyNav';
import SectionTitle from '../Partials/SectionTitle';
import BootstrapContainer from '../Partials/Bootstrapped/BootstrapContainer';
import Skill from '../Partials/Bootstrapped/Skill';
import Project from '../Partials/Bootstrapped/Project';


// Background Images:
import deadpoolBg from '../../assets/images/deadpool-bg.png';

const Body = styled.div`
	background: #2a2a2a;
`;

const home = (props) => (
	<Body>
		<Hero name="Charles Wilfred Renk" title="Front-End &amp; Full Stack Web Developer"/>
		<Container>
			<CopyBlock>
				Hey there! My name is Charly, and I'm a developer from Minneapolis, Minnesota. Currently, I work as an Associate Developer at Periscope ad agency located in Downtown Minneapolis. There, I work with many different clients including Target, Trolli, Cox Internet, and Intuit. While I mostly work as a front-end web developer, I also have experience with full-stack development. I love building pretty things on the internet, and I find it very satisfying to make a button do a cool thing. Besides coding at my desk, you might also find me playing tuba at burning man, throwing discs long distances into baskets, drawing naked people, or playing with my three cats.  
			</CopyBlock>
		</Container>
		<StickyNav />
		<Container>
			<SectionTitle title="Skills" />
			<BootstrapContainer>
				<Skill skillName="HTML5" skillLevel="Excellent"/>
				<Skill skillName="CSS3" skillLevel="Excellent"/>
				<Skill skillName="Javascript" skillLevel="Excellent"/>
				<Skill skillName="Node" skillLevel="Excellent"/>
				<Skill skillName="SASS" skillLevel="Excellent"/>
				<Skill skillName="Wordpress" skillLevel="Excellent"/>
				<Skill skillName="AEM" skillLevel="Excellent"/>
				<Skill skillName="SQL" skillLevel="Intermediate"/>
				<Skill skillName="Mongo" skillLevel="Intermediate"/>
				<Skill skillName="React" skillLevel="Intermediate"/>
				<Skill skillName="Node" skillLevel="Intermediate"/>
				<Skill skillName="PHP" skillLevel="Beginner"/>
				<Skill skillName="Advanced Custom Fields (WP)" skillLevel="Beginner"/>
			</BootstrapContainer>
		</Container>
		<Container>
			<SectionTitle title="Projects" />
			<BootstrapContainer>
				<Project projectName="Trolli: Deadpool Tiny Hands" techUsed="HTML5 | CSS3 | SASS Jquery | Google Analytics | Sketch | Photoshop |" backgroundImage={deadpoolBg}/>
				<Project projectName="Trolli: Deadpool Tiny Hands" backgroundImage={deadpoolBg}/>
			</BootstrapContainer>
		</Container>
		<Container>
			<SectionTitle title="Contact" />
		</Container>
		<form action="https://formspree.io/email@domain.tld" method="POST" />
		<input type="text" name="name" />




	</Body>
)

export default home;