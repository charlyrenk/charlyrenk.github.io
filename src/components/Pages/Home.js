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

// Skill Logos
import HTML5 from '../../assets/images/skill-logos/html5.png';
import CSS3 from '../../assets/images/skill-logos/css3.png';
import Bootstrap from '../../assets/images/skill-logos/bootstrap.png';
import SASS from '../../assets/images/skill-logos/sass.png';
import StyledComponents from '../../assets/images/skill-logos/styledcomponents.png';
import ReactLogo from '../../assets/images/skill-logos/react.png';
import Javascript from '../../assets/images/skill-logos/javascript.png';
import JQuery from '../../assets/images/skill-logos/jquery.png';
import AngularJS from '../../assets/images/skill-logos/angular.png';
import NodeJS from '../../assets/images/skill-logos/nodejs.png';
import SQL from '../../assets/images/skill-logos/postgresql.png';
import MongoDB from '../../assets/images/skill-logos/mongodb.png';
import PHP from '../../assets/images/skill-logos/php.png';
import Wordpress from '../../assets/images/skill-logos/wordpress.png';
import Tumblr from '../../assets/images/skill-logos/tumblr.png';
import AEM from '../../assets/images/skill-logos/aem.png';
import ACF from '../../assets/images/skill-logos/acf.png';
import Heroku from '../../assets/images/skill-logos/heroku.png';
import BitBucket from '../../assets/images/skill-logos/bitbucket.png';
import Github from '../../assets/images/skill-logos/github.png';
import Photoshop from '../../assets/images/skill-logos/photoshop.png';
import Sketch from '../../assets/images/skill-logos/sketch.png';

// Project Images:
import deadpool from '../../assets/images//projects/deadpool.png';
import sop from '../../assets/images//projects/society-of-proadvisory.png';
import coxTechTable from '../../assets/images//projects/cox-tech-table.png';
import billionDollarCommercial from '../../assets/images//projects/billion-dollar-commercial.png';

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
						<div className="col-12"><SkillCategory>HTML &amp; CSS</SkillCategory></div>
						
						<Skill skillName="HTML5" logo={HTML5} skillLevel="Excellent"/>
						<Skill skillName="CSS3" logo={CSS3} skillLevel="Excellent"/>
						<Skill skillName="Bootstrap" logo={Bootstrap} skillLevel="Excellent"/>
						<Skill skillName="SASS" logo={SASS} skillLevel="Excellent"/>
						<Skill skillName="JSX" logo={ReactLogo} skillLevel="Excellent"/>
						<Skill skillName="HTML Emails" logo={HTML5} skillLevel="Excellent"/>
						<Skill skillName="Styled Components" logo={StyledComponents} skillLevel="Excellent"/>
						<Skill skillName="AngularJS Material" logo={AngularJS} skillLevel="Excellent"/>


						<div className="col-12"><SkillCategory>JAVASCRIPT</SkillCategory></div>
						<Skill skillName="Javascript" logo={Javascript} skillLevel="Excellent"/>
						<Skill skillName="jQuery" logo={JQuery} skillLevel="Excellent"/>
						<Skill skillName="React" logo={ReactLogo} skillLevel="Intermediate"/>
						<Skill skillName="AngularJS" logo={AngularJS} skillLevel="Intermediate"/>
						
						<div className="col-12"><SkillCategory>BACK-END</SkillCategory></div>
						<Skill skillName="NodeJS" logo={NodeJS} skillLevel="Excellent"/>
						<Skill skillName="PostgreSQL" logo={SQL} skillLevel="Intermediate"/>
						<Skill skillName="MongoDB" logo={MongoDB} skillLevel="Intermediate"/>
						<Skill skillName="PHP" logo={PHP} skillLevel="Beginner"/>

						<div className="col-12"><SkillCategory>CMS</SkillCategory></div>
						<Skill skillName="Wordpress" logo={Wordpress} skillLevel="Excellent"/>
						<Skill skillName="AEM" logo={AEM} skillLevel="Excellent"/>
						<Skill skillName="Tumblr" logo={Tumblr} skillLevel="Excellent"/>
						<Skill skillName="Advanced Custom Fields" logo={ACF} skillLevel="Beginner"/>

						<div className="col-12"><SkillCategory>OTHER</SkillCategory></div>
						<Skill skillName="Bitbucket" logo={BitBucket} skillLevel="Excellent"/>
						<Skill skillName="Github" logo={Github} skillLevel="Excellent"/>
						<Skill skillName="Heroku" logo={Heroku} skillLevel="Intermediate"/>
						<Skill skillName="Photoshop" logo={Photoshop} skillLevel="Beginner"/>
						<Skill skillName="Sketch" logo={Sketch} skillLevel="Beginner"/>
					</BootstrapContainer>
				</Container>
				<Container>
					<SectionTitle id="Projects" title="Projects" />
					<BootstrapContainer>
						<Project projectName="Intuit: Society of Proadvisory" projectDescription="At Periscope, we built an illumanati/ secret-society themed site to promote Intuit's proadvisor program. The site features easter eggs, quizes, amazing designs, and more." techUsed="HTML5 | CSS3 | SASS | Javascript | Jquery | Wordpress | WPEngine | PHP " backgroundImage={sop} link="/SocietyOfProadvisory"/>
						<Project projectName="Tiny Hands by Trolli" projectDescription="At Periscope, I built a microsite for Deadpool-themed gummy called Tiny Hands. The microsite had three phases for to stay revelant with Deadpool 2's release-cycle." techUsed="HTML5 | CSS3 | | Javascript | SASS | Jquery | Google Analytics | Sketch | Photoshop" backgroundImage={deadpool} link="/DeadPoolTinyHands"/>
						<Project projectName="Cox Tech Table" projectDescription="At Periscope, we built a web app for Cox that featured a variety of speakers and headphones available in Cox stores. The web page was designed for Elo tablets that were set up at experiential tables." techUsed="HTML5 | CSS3 | Javascript | React | Styled Components | AWS S3 Buckets | Photoshop | Mood Media" backgroundImage={coxTechTable} link="/CoxTechTable"/>
						<Project projectName="Billion Dollar Commercial" projectDescription="At Periscope, I built a microsite promoting Minnesota Lottery's Billion Dollar Commerical campaign. The site was built into two phases: the first a countdown page, the second being the big reveal. " techUsed="HTML5 | CSS3 | SASS | Javascript | jQuery | Wordpress | WPEngine | PHP | Photoshop" backgroundImage={billionDollarCommercial} link="/BillionDollarCommercial"/>
						
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