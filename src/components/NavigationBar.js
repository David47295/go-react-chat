import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.expandNavbar = this.expandNavbar.bind(this);
        this.state = {
            expanded: false
        }
    }

    expandNavbar(event) {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        return (
            <Navbar id="navigation-bar" expand="lg">
                <Nav className="flex-column">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">News & Events</Nav.Link>
                        <Nav.Link href="/">Pokedex</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;