import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style/Details.css';

class Details extends React.Component {
    render() {
        console.log(this.props)
        const pokemon_id = this.props.match.params.id;
        return (
            <div id="pokemon-details">
                <Row>
                    <Col lg={8}>
                        <h1>{`#${pokemon_id}: POKEMON NAME`}</h1>
                    </Col>
                    <Col>
                        <Link to="/pokedex">Back to Pokedex</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="info">
                            <div className="border rounded border-dark image"></div>
                            <div>
                                <p>Description</p>
                                <span><b>Japanese Name</b>: Some name here</span>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default Details;