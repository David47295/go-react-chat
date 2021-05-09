import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Announcments from '../components/Home/Announcements';
import '../style/Home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Row className="h-25">
                    <div id="banner">
                        <h1>Serebii.net Remake</h1>
                        <p>Welcome to the remake of Serebii.net, a more modern take on the internet's most expansive Pokemon database</p>
                    </div>
                </Row>
                <Row className="h-50">
                    <Row id="content" className="align-self-center">
                        <Col sm={8}>
                            <Announcments />
                        </Col>
                        <Col sm={4}>
                            In-Game Events
                        </Col>
                    </Row>
                </Row>

            </div>
        )
    }
}

export default Home;