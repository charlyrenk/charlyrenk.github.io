import React from 'react';
import styled from 'styled-components';

import Hero from '../Partials/Hero';
import CopyBlock from '../Partials/CopyBlock';

const Container = styled.div`
	background-repeat: no-repeat;
	background-position: center;
	height: 100%;
	text-align: center;
`;


const home = (props) => (
	<Container>
		<Hero name="Charles Wilfred Renk" title="Front-End &amp; Full Stack Web Developer"/>
		<CopyBlock>
			Hey there! My name is Charly, and I'm a developer from Minneapolis, Minnesota. Currently, I work as an Associate Developer at Periscope ad agency located in Downtown Minneapolis. There, I work with many different clients including Target, Trolli, Cox Internet, and Intuit. While I mostly work as a front-end web developer, I also have a experience with full-stack development. I love building pretty things on the internet, and I find it very satisfying to make a button do a cool thing. Besides coding at my desk, you might also find me playing tuba at burning man, throwing discs long distances into baskets, drawing naked people, or playing with my three cats.  
		</CopyBlock>
		
	</Container>
)

export default home;