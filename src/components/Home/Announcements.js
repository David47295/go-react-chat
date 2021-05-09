import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../style/Announcements.css'
import AnnouncementCard from './Annoucements/AnnouncementCard';

class Announcements extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    News
                        <Row>
                        <Col>
                            News Posts
                            <AnnouncementCard title="Pokemon GO - Community Day" date="Saturday March 6th, 2021" games="Pokemon GO" />
                            <AnnouncementCard title="Pokemon Cafe Mix + Pokemon TCG - Pokemon GO Tie-in" date="Saturday March 6th, 2021" games="Pokemon GO" />
                        </Col>
                        <Col>
                            Pokemon ANime
                            <div className="weekly-pokemon">
                                <div className="image"></div>
                            </div>
                            <div className="episode-news">
                                <b>Pokemon Cafe Mix + Pokemon TCG - Pokemon GO Tie-in</b><br />
                                    Saturday March 6th, 2021<br />
                                    7:53 GMT / 2:53 EST<br />
                                    Games: Pokemon GO
                                </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        );
    }
}

export default Announcements;