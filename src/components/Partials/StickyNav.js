import React, {Component} from 'react';
import styled from 'styled-components';

const Ul = styled.ul`	
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
	font-family: 'Alegreya Sans',sans-serif;
	font-size: 25px;
`;

const Li = styled.li`	
	height: 100%;
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	transition: all 0.3s ease-in;
	cursor: pointer;
	background: #c8b16a;
	color: #FFFFFF;

	:hover {
		background: #9d8243
	}
`;

const navBar = {
	width: '100%',
	maxWidth: '1600px',
	margin: 'auto',
	top: '0',
	color: '#ccc',
	padding: '30px',
}

const fixedNav = {
	position: 'fixed',
	width: '100%',
	left: '0',
	top: '0',
	background: '#212121',
	color: '#ccc',
	zIndex: '1000' 
}

class StickyNav extends Component {
  constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  render() {
    return (
      <nav style={this.state.scroll > this.state.top ? fixedNav : navBar} className={this.state.scroll > this.state.top ? "fixedNav" : "cat"}>
        <Ul>
          <Li>Skills</Li>
          <Li>Projects</Li>
          <Li>Contact</Li>
        </Ul>
      </nav>
    );
  }
}

export default StickyNav;