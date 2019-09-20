import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	font-family: 'Alegreya Sans',sans-serif;
	color: #FFFFFF;
	padding: 0 25px;
`;

const ProjectCard = styled.div`
	text-align: center;
	padding: 20px;
	margin: 10px auto;
	border-radius: 5px;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center; 
	position: relative;
	height: 22vw;
	max-height: 405px;
	border-radius: 5px;

	:hover .overlay {
		bottom: 0;
		height: 100%;
	}

	@media (max-width: 992px) {
		height: 42vw;
	}


`;

const ProjectName = styled.h3`
 	font-size: 3.25VW;
	font-weight: bold;
	@media (min-width: 1600px) {
		font-size: 56px;
	}
	@media (max-width: 768px) {
		font-size: 7vw;
	}
`

const ProjectCopyContainer = styled.div`
	position: absolute;
	top: 30%;
	left: 0;
	width: 100%;
	padding: 0 20px;
`

const ProjectTech = styled.p`
	color: #FFFFFF;
	font-size: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
`

const ProjectTechMobile = styled.p`
	display: none;
	@media (max-width: 992px) {
		display: block;
		font-size: 3vw;
	}
`

const Layer = styled.div `
	background-color: rgba(63, 66, 69, 0.5);
    position: absolute;
    top: 0;
	left: 0;
    width: 100%;
	height: 100%;
	border-radius: 5px;
	padding: 20px;
	:hover {
		background-color: rgba(63, 66, 69, 0.8);
		cursor: pointer;
	}
`
const Overlay = styled.div `
	position: absolute;
	bottom: 100%;
	left: 0;
	right: 0;
	background-color: rgba(63, 66, 69, 0.8);
	overflow: hidden;
	width: 100%;
	height:0;
	transition: .5s ease;
`

const project = (props) => (

	<Container className="col-12 col-lg-6">
		<ProjectCard style={{backgroundImage: 'url(' + props.backgroundImage + ')'}}>
			<Layer>
				<ProjectCopyContainer>
					<ProjectName>{props.projectName}</ProjectName>
					<ProjectTechMobile>Tech: {props.techUsed}</ProjectTechMobile>
				</ProjectCopyContainer>
				<Overlay className="overlay">
					<ProjectTech><strong>Tech Used:</strong> <br />{props.techUsed}</ProjectTech>
				</Overlay>
			</Layer>
		</ProjectCard>
	</Container>
)

export default project;