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

const excellentBg = {
	background: '#6ba8e1',
}

const intermediateBg = {
	background: '#99c0e4',
}

const beginnerBg = {
	background: '#cce0f3',
}

const skill = (props) => (
	<Container className="col-6 col-sm-6 col-md-4 col-lg-3">
		<SkillCard style={props.skillLevel === 'Excellent' ? excellentBg : props.skillLevel === 'Intermediate' ? intermediateBg: beginnerBg}>
			<SkillName>{props.skillName}</SkillName>
			<p>{props.skillLevel}</p>
		</SkillCard>
		
	</Container>
)

export default skill;