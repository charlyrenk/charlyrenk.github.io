import React, {Component} from 'react';
import styled from 'styled-components';

import '../PartialsCSS/Project.css';

const Container = styled.div`
	text-align: center;
	font-family: 'Alegreya Sans',sans-serif;
	color: #FFFFFF;
	padding:  25px;

	@media (max-width: 992px) {
		padding: 15px 0;
	}

`;

const ProjectCard = styled.div`
	text-align: center;
	padding: 20px;
	margin: 0 auto;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center; 
	position: relative;
	height: 22vw;
	max-height: 405px;

	@media (max-width: 992px) {
		height: 50vw;
	}


`;

const ProjectName = styled.h3`
 	font-size: 3.25VW;
	font-weight: bold;
	padding: 15px
	background: #3e7bb4;
	border-radius: 5px 5px 0 0;
	margin: 0;
	@media (min-width: 1600px) {
		font-size: 56px;
	}
	@media (max-width: 768px) {
		font-size: 7vw;
	}
`

const ProjectDescriptionBlock = styled.div`
	background: #3e7bb4;
	border-radius: 0 0 5px 5px;
	position: relative;
	padding: 15px; 
	min-height: 135px; 
	overflow: auto;
	margin: 0;
`

const ProjectDescription = styled.p`
	font-size: 18px;
	line-height: 22px;
	font-weight: bold;
	font-family: 'Alegreya Sans',sans-serif;
	margin: 0 0 0 5px;
	
	@media (max-width: 576px) {
		font-size: 16px;
		line-height: 18px;
	} 
`

const AdditionalInfoBlock = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
`

const ProjectTech = styled.p`
	color: #FFFFFF;
	font-size: 20px;
	font-weight: bold;
	width: 100%
	margin: 0;
	text-align: center;
	@media (max-width: 576px) {
		font-size: 16px;
	} 
`

const Layer = styled.div `
	background-color: rgba(63, 66, 69, 0.2);
    position: absolute;
    top: 0;
	left: 0;
    width: 100%;
	height: 100%;
	padding: 20px;
`
const Overlay = styled.div `
	position: absolute;
	bottom: 100%;
	left: 0;
	right: 0;
	background-color: rgba(63, 66, 69, 0.9);
	overflow: hidden;
	width: 100%;
	height:0;
	transition: .5s ease;
`

const ProjectLink = styled.a`
	text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    display: block;
    padding: 5px;
    width: 140px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    font-size: 18px;
    margin: 10px auto;
	@media (max-width: 576px) {
		font-size: 16px;
	} 
	:hover {
		background: #c8b16a;
		color: #FFFFFF;
		text-decoration: none;
	}
`


class Project extends Component {

	constructor(props) {
		super(props);
        this.state = {
            active: false,
		};
    }
    toggleProjectDetails = () => {
		const currentState = this.state.active;
        this.setState({ active: !currentState });
	};
	
	render() {
		return (
			<Container className="col-12 col-lg-6">
				<ProjectName>{this.props.projectName}</ProjectName>
				<ProjectCard onClick={ (window.innerWidth < 768) ? this.toggleProjectDetails : null} onMouseEnter={ (window.innerWidth > 767) ? this.toggleProjectDetails : null} onMouseLeave={(window.innerWidth > 767) ? this.toggleProjectDetails : null}  style={{backgroundImage: 'url(' + this.props.backgroundImage + ')'}}>
					<Layer>
						<Overlay className = {this.state.active ? 'OverlayClicked':  null} >
						<AdditionalInfoBlock>
								<ProjectTech>Tech: <br />{this.props.techUsed}</ProjectTech>
						</AdditionalInfoBlock>
						</Overlay>
					</Layer>
				</ProjectCard>
				<ProjectDescriptionBlock>
					<ProjectDescription>{this.props.projectDescription} </ProjectDescription>
					<ProjectLink href={this.props.link}> LEARN MORE</ProjectLink>
				</ProjectDescriptionBlock>
			</Container>
		)
	}
}

export default Project;