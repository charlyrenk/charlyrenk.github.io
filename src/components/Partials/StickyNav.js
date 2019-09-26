import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import './PartialsCSS/StickyNav.css';

const NavBar = styled.ul`	
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
	font-family: 'Alegreya Sans',sans-serif;
	font-size: 25px;
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

const navItem = {
	height: '100%',
	flex: '1',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '10px',
	transition: 'all 0.3s ease-in',
	cursor: 'pointer',
	background: '#c8b16a',
	color: '#FFFFFF'
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
        this.setState({top: el.offsetTop, height: el.offsetHeight - 37});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  render() {
    return (
      <nav style={this.state.scroll > this.state.top ? fixedNav : navBar} className={this.state.scroll > this.state.top ? "fixedNav" : ""}>
			<NavBar>
				<Link className="ActiveNav" style={navItem} activeClass='active' to="Skills" smooth={true} duration={500}>Skills</Link>
	        	<Link className="ActiveNav" style={navItem} activeClass='active' to="Projects" smooth={true} duration={500}>Projects</Link>
	        	<Link className="ActiveNav" style={navItem} activeClass='active' to="Contact" smooth={true} duration={500}>Contact</Link>
			</NavBar>
      </nav>
    );
  }
}

export default StickyNav;