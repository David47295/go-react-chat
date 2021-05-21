import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style/Details.css';
import axios from 'axios';


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/pokedex/' + this.props.match.params.name)
        .catch((err) => {
            console.error('Error: Failed to get pokemon information:', err)
        })
        .then(
            (response) => {
                this.setState({
                    ...response.data,
                    loading: false
                })
            }
        )
    }

    render() {
        console.log(this.state)
        if (this.state.loading) {
            return <div>
                Loading...
            </div>
        }
        return (
            <div id="pokemon-details">
                <Row>
                    <Col lg={8}>
                        <span><h1>{`#${this.state.Dex_number}: ${this.state.Name}`}</h1> {this.state.Type1}</span>
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