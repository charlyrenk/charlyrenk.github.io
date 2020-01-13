import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	font-family: 'Alegreya Sans',sans-serif;
`;

const SkillCard = styled.div`
	text-align: center;
	padding: 20px;
	margin: 10px auto;
	border-radius: 5px;
`;

const SkillName = styled.h3`
	font-weight: bold;
`

const SkillLevel = styled.p`
	font-family: 'Alegreya Sans',sans-serif;
	font-size: 20px;
	font-weight: bold;
	margin: 10px 0;
`

const Logo = styled.img`
	height: 100px;
`
const excellentBg = {
	background: '#2f82d0',
	
}

const intermediateBg = {
	background: '#6ba8e1',
}

const beginnerBg = {
	background: '#99c0e4',
}

const skill = (props) => (
	<Container className="col-12 col-sm-6 col-md-4 col-lg-3">
		<SkillCard style={props.skillLevel === 'Excellent' ? excellentBg : props.skillLevel === 'Intermediate' ? intermediateBg: beginnerBg}>
			<SkillName>{props.skillName}</SkillName>
			{ props.logo
        		? <Logo src={props.logo} alt={props.skillName}/>
        		:  null
      		}
			<SkillLevel>{props.skillLevel}</SkillLevel>
		</SkillCard>	
	</Container>
)

export default skill;