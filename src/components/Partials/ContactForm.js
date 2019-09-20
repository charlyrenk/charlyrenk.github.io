import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`	
	font-size: 42px;
	font-family: 'Alegreya Sans',sans-serif;
	text-align: center;
	margin: 0;
	color: #c8b16a;
	font-weight: bold;
	@media (max-width: 576px) {
		font-size: 36px;
	} 
`;

const sectionTitle = (props) => (
	<form method="POST" action="https://formspree.io/charleswrenk@gmail.com">
		<input type="email" name="email" placeholder="Your email" />
		<textarea name="message" placeholder="Write Me a Message"></textarea>
		<button type="submit">Send Message</button>
	</form>
)

export default sectionTitle;