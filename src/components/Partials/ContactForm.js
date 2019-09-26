import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`	
	width: 100%;
	max-width: 800px;
	margin: auto;
	padding: 10px 0;
	text-align: center;

`;


const Input = styled.input`
	width: 100%;
	margin: 20px 0;
	font-size: 20px;
	padding: 10px;
	font-family: 'Alegreya Sans',sans-serif;
	@media (max-width: 576px) {
		
	} 
`;

const TextArea = styled.textarea`	
	width: 100%;
	margin: 20px 0;
	font-size: 20px;
	padding: 10px;
	font-family: 'Alegreya Sans',sans-serif;
	@media (max-width: 576px) {
		
	} 
`;

const Button = styled.button`
	font-family: 'Alegreya Sans',sans-serif;
	font-size: 20px;
	color: #FFFFFF;
	padding: 10px 20px;
	background: #3e7bb4;
	border-radius: 5px;
	border: 1px solid #3e7bb4;
	:hover {
		background: #99c0e4;
		color: #2a2a2a
	}


`

const sectionTitle = () => (
	<FormContainer>
		<form method="POST" action="https://formspree.io/charleswrenk@gmail.com">
			<Input type="email" name="email" placeholder="Your email" />
			<TextArea name="message" placeholder="Write Me a Message"></TextArea>
			<Button type="submit">SEND MESSAGE</Button>
		</form>
	</FormContainer>
)

export default sectionTitle;