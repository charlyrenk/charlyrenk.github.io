import React, {Component} from 'react';
import styled from 'styled-components';

import Hero from '../Partials/Hero';
import Container from '../Partials/Container';
import CopyBlock from '../Partials/CopyBlock';
import StickyNav from '../Partials/StickyNav';
import SectionTitle from '../Partials/SectionTitle';
import BootstrapContainer from '../Partials/Bootstrapped/BootstrapContainer';
import Skill from '../Partials/Bootstrapped/Skill';
import Project from '../Partials/Bootstrapped/Project';
import ContactForm from '../Partials/ContactForm';


// Project Images:
import deadpool from '../../assets/images/deadpool.png';

const Body = styled.div`
	background: #2a2a2a;
`;


const SkillCategory = styled.h4`
	margin: 10px 0;
	font-size: 32px;
	color: #FFFFFF;
	font-family: 'Alegreya Sans',sans-serif;
	border-bottom: 2px solid #FFFFFF;
`

class Home extends Component {

	render () {
		return (	
			<Body>
				<Hero name="Charles Wilfred Renk" title="Front-End &amp; Full Stack Web Developer"/>
				<Container>
					<CopyBlock>
						Hey there! My name is Charly, and I'm a developer from Minneapolis, Minnesota. Currently, I work as an Associate Developer at Periscope ad agency located in Downtown Minneapolis. There, I work with many different clients including Target, Trolli, Cox Internet, and Intuit. While I mostly work as a front-end web developer, I also have experience with full-stack development. I love building pretty things on the internet, and I find it very satisfying to make a button do a cool thing. Besides coding at my desk, you might also find me playing tuba at burning man, throwing discs long distances into baskets, drawing naked people, or playing with my three cats.  
					</CopyBlock>
				</Container>
				<StickyNav />
				<Container>
					<SectionTitle id="Skills" title="Skills" />
					<BootstrapContainer>
						<div class="col-12"><SkillCategory>HTML &amp; CSS</SkillCategory></div>
						
						<Skill skillName="HTML5" logo="" skillLevel="Excellent"/>
						<Skill skillName="CSS3" logo="" skillLevel="Excellent"/>
						<Skill skillName="Bootstrap" logo="" skillLevel="Excellent"/>
						<Skill skillName="SASS" logo="" skillLevel="Excellent"/>
						<Skill skillName="JSX" logo="" skillLevel="Excellent"/>


						<div class="col-12"><SkillCategory>JAVASCRIPT</SkillCategory></div>
						<Skill skillName="Javascript" logo="" skillLevel="Excellent"/>
						
						
						
						<div class="col-12"><SkillCategory>BACK-END</SkillCategory></div>
						<Skill skillName="Node" logo="" skillLevel="Excellent"/>
						<Skill skillName="SQL" logo="" skillLevel="Intermediate"/>
						<Skill skillName="Mongo" logo="" skillLevel="Intermediate"/>
						<Skill skillName="React" logo="" skillLevel="Intermediate"/>
						<Skill skillName="PHP" logo="" skillLevel="Beginner"/>
						<div class="col-12"><SkillCategory>CMS</SkillCategory></div>
						<Skill skillName="Wordpress" logo="" skillLevel="Excellent"/>
						<Skill skillName="AEM" logo="" skillLevel="Excellent"/>
						<Skill skillName="Advanced Custom Fields" logo="" skillLevel="Beginner"/>
						<div class="col-12"><SkillCategory>OTHER</SkillCategory></div>
						<Skill skillName="Bitbucket" logo="" skillLevel="Excellent"/>
						<Skill skillName="Github" logo="" skillLevel="Excellent"/>
						<Skill skillName="Photoshop" logo="" skillLevel="Beginner"/>
					</BootstrapContainer>
				</Container>
				<Container>
					<SectionTitle id="Projects" title="Projects" />
					<BootstrapContainer>
						<Project projectName="Tiny Hands by Trolli" projectDescription="At Periscope, I built a microsite for Deadpool-themed gummy called Tiny Hands. The microsite had three phases for to stay revelant with Deadpool 2's release-cycle." techUsed="HTML5 | CSS3 | SASS | Jquery | Google Analytics | Sketch | Photoshop" backgroundImage={deadpool} link="/DeadPoolTinyHands"/>
						<Project projectName="Trolli: Deadpool Tiny Hands" backgroundImage={deadpool}/>
					</BootstrapContainer>
				</Container>
				<Container>
					<SectionTitle id="Contact" title="Contact" />
					<ContactForm />
				</Container>
			</Body>
		)
	}
}

export default Home;